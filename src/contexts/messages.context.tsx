'use client'
import { createContext, useContext, useState } from 'react'

interface MessageContextProps {
    messages: Message[]
    setMessages: any
    addMessages: (data: Message) => void
}

export const MessageContext = createContext({} as MessageContextProps)

export function MessageContextProvider({ children }: { children: React.ReactNode }) {
    const [messages, setMessages] = useState<Message[]>([])

    const addMessages = (data: Message) => {
        const oldData = messages
        oldData.push(data)
        setMessages(oldData)
    }

    return <MessageContext.Provider value={{ messages, setMessages, addMessages }}>{children}</MessageContext.Provider>
}

export const useMessage = () => useContext(MessageContext)
