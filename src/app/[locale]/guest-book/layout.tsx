'use client'

import { AuthContextProvider } from '@/contexts/auth.context'
import { MessageContextProvider } from '@/contexts/messages.context'
import { SessionProvider } from 'next-auth/react'

export default function GuestBookLayout({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <AuthContextProvider>
                <MessageContextProvider>{children}</MessageContextProvider>
            </AuthContextProvider>
        </SessionProvider>
    )
}
