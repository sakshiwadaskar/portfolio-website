import React from "react";
import {useLocation} from "react-router-dom";
import {FiMessageSquare, FiX} from "react-icons/fi";
import {useChatBot} from "../context/ChatBotContext.jsx";
import {useChatSession} from "../hooks/useChatSession.js";
import ChatConversation from "./ChatConversation.jsx";
import "./chatbot.css";

const ChatBot = () => {
    const {pathname} = useLocation();
    const {isOpen, closeChat, toggleChat} = useChatBot();
    const session = useChatSession();

    // The homepage embeds its own always-open panel — avoid showing both.
    if (pathname === "/") return null;

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

                    <ChatConversation {...session}/>
                </div>
            )}
        </>
    );
};

export default ChatBot;
