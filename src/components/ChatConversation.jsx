import React from "react";
import {FiSend} from "react-icons/fi";

const ChatConversation = ({messages, input, setInput, loading, slowNotice, sendMessage}) => {
    return (
        <>
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
        </>
    );
};

export default ChatConversation;
