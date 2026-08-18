import React from "react";
import {useChatSession} from "../hooks/useChatSession.js";
import ChatConversation from "./ChatConversation.jsx";

const SUGGESTIONS = [
    "Does she have distributed systems experience?",
    "Tell me about her AI projects",
    "What's her tech stack?",
    "Is she open to relocation?",
];

const HomeChatPanel = () => {
    const session = useChatSession();
    const showSuggestions = session.messages.length === 1;

    return (
        <div className={"home__chat-panel"}>
            <div className={"chatbot__header home__chat-header"}>
                <span>Ask My AI Assistant</span>
            </div>

            {showSuggestions && (
                <div className={"home__chat-suggestions"}>
                    {SUGGESTIONS.map((question) => (
                        <button
                            key={question}
                            className={"home__chat-chip"}
                            onClick={() => session.ask(question)}
                        >
                            {question}
                        </button>
                    ))}
                </div>
            )}

            <ChatConversation {...session}/>
        </div>
    );
};

export default HomeChatPanel;
