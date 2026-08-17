import React, {useRef, useState} from "react";
import {FiMessageSquare, FiSend, FiX} from "react-icons/fi";
import {useChatBot} from "../context/ChatBotContext.jsx";
import "./chatbot.css";

const API_URL = import.meta.env.VITE_CHATBOT_API_URL || "";

const WELCOME_MESSAGE = {
    role: "bot",
    text: "Hi, I'm an AI assistant trained on Sakshi's resume and projects. Ask me anything — her experience, skills, or a specific project.",
};

const ChatBot = () => {
    const {isOpen, closeChat, toggleChat} = useChatBot();
    const [messages, setMessages] = useState([WELCOME_MESSAGE]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [slowNotice, setSlowNotice] = useState(false);
    const slowTimer = useRef(null);

    const sendMessage = async (e) => {
        e.preventDefault();
        const question = input.trim();
        if (!question || loading) return;

        setMessages((prev) => [...prev, {role: "user", text: question}]);
        setInput("");
        setLoading(true);
        setSlowNotice(false);

        slowTimer.current = setTimeout(() => setSlowNotice(true), 4000);

        try {
            if (!API_URL) throw new Error("missing-api-url");

            const res = await fetch(`${API_URL}/chat`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({message: question}),
            });

            if (!res.ok) throw new Error("bad-response");

            const data = await res.json();
            const cleanText = data.answer.replace(/\*\*/g, "").replace(/^[*-]\s+/gm, "");
            setMessages((prev) => [...prev, {role: "bot", text: cleanText}]);
        } catch (err) {
            setMessages((prev) => [
                ...prev,
                {
                    role: "bot",
                    text: "Sorry, I couldn't reach the assistant right now. Please reach out directly at sakshisw29@gmail.com.",
                },
            ]);
        } finally {
            clearTimeout(slowTimer.current);
            setSlowNotice(false);
            setLoading(false);
        }
    };

    return (
        <>
            <button
                className={"chatbot__bubble"}
                onClick={toggleChat}
                aria-label={isOpen ? "Close chat" : "Ask my AI assistant"}
            >
                {isOpen ? <FiX/> : <FiMessageSquare/>}
            </button>

            {isOpen && (
                <div className={"chatbot__panel"}>
                    <div className={"chatbot__header"}>
                        <span>Ask about Sakshi</span>
                        <button className={"chatbot__close"} onClick={closeChat} aria-label={"Close chat"}>
                            <FiX/>
                        </button>
                    </div>

                    <div className={"chatbot__messages"}>
                        {messages.map((m, i) => (
                            <div key={i} className={`chatbot__message chatbot__message--${m.role}`}>
                                {m.text}
                            </div>
                        ))}
                        {loading && (
                            <div className={"chatbot__message chatbot__message--bot chatbot__message--loading"}>
                                {slowNotice
                                    ? "Still thinking — the assistant may be waking up from idle, this can take up to a minute…"
                                    : "Thinking…"}
                            </div>
                        )}
                    </div>

                    <form className={"chatbot__input-row"} onSubmit={sendMessage}>
                        <input
                            type={"text"}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={"Ask a question…"}
                            className={"chatbot__input"}
                            disabled={loading}
                        />
                        <button type={"submit"} className={"chatbot__send"} disabled={loading || !input.trim()}>
                            <FiSend/>
                        </button>
                    </form>
                </div>
            )}
        </>
    );
};

export default ChatBot;
