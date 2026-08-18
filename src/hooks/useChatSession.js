import {useRef, useState} from "react";

const API_URL = import.meta.env.VITE_CHATBOT_API_URL || "";

const WELCOME_MESSAGE = {
    role: "bot",
    text: "Hi, I'm an AI assistant trained on Sakshi's resume and projects. Ask me anything — her experience, skills, or a specific project.",
};

export const useChatSession = () => {
    const [messages, setMessages] = useState([WELCOME_MESSAGE]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [slowNotice, setSlowNotice] = useState(false);
    const slowTimer = useRef(null);

    const ask = async (question) => {
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

    const sendMessage = (e) => {
        e.preventDefault();
        ask(input.trim());
    };

    return {messages, input, setInput, loading, slowNotice, sendMessage, ask};
};
