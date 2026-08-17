import React, {createContext, useContext, useState} from "react";

const ChatBotContext = createContext(null);

export const ChatBotProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const openChat = () => setIsOpen(true);
    const closeChat = () => setIsOpen(false);
    const toggleChat = () => setIsOpen((prev) => !prev);

    return (
        <ChatBotContext.Provider value={{isOpen, openChat, closeChat, toggleChat}}>
            {children}
        </ChatBotContext.Provider>
    );
};

export const useChatBot = () => useContext(ChatBotContext);
