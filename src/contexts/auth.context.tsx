'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import { createContext, useContext, useState } from 'react'

type AuthStatus = 'authenticated' | 'unauthenticated' | 'loading'
interface AuthContextProps {
    session: any
    signInGithub: () => Promise<void>
    signOutGitHub: () => Promise<void>
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthContextProvider({ children }: { children: React.ReactNode }) {
    const { data } = useSession()
    const [session, setSession] = useState<typeof data | null>(null)

    async function signInGithub() {
        const response = await signIn('github')
        if (response?.ok) {
            setSession(data)
        }
    }

    async function signOutGitHub() {
        signOut()
    }

    return <AuthContext.Provider value={{ session, signInGithub, signOutGitHub }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
