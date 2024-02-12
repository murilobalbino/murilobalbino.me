'use client'
import GuestsMessages from '@/components/guests-messages'
import { Textarea } from '@/components/ui/textarea'
import { useAuth } from '@/contexts/auth.context'
import { sendMessage } from '@/lib/api/guestbook'
import { Github, Send } from 'lucide-react'
import React, { useCallback } from 'react'

export default function GuestBookPage() {
    const [messageLength, setMessageLength] = React.useState(0)
    const [message, setMessage] = React.useState('')
    const { status, user, signIn, signOut } = useAuth()

    const handleOnChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
        setMessageLength(e.currentTarget.value.length)
    }, [])

    const handleSendMessage = useCallback(
        async (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault()
            if (message.length === 0 || message.length > 250) return

            if (!user || status !== 'authenticated') return

            const { state, params } = await sendMessage(message, user)
            console.log(state, params)
        },
        [message, user, status],
    )

    return (
        <section className="flex w-full flex-col gap-4">
            <h1 className="text-2xl font-bold max-sm:text-3xl">Livro de Visitas</h1>
            <h2 className="opacity-80">
                Bem-vindo ao meu livro de visitas! Que tal deixar sua mensagem aqui? Seja um simples oi, uma mensagem
                motivacional ou uma piada, me surpreenda 😁
            </h2>
            <Textarea
                placeholder="Deixe sua mensagem aqui..."
                className="h-24"
                onChange={handleOnChange}
                maxLength={250}
                id="message"
            />
            <div className="flex justify-between gap-2">
                <p className="flex-1 text-sm text-muted-foreground">{messageLength}/250</p>

                {user ? (
                    <>
                        <button
                            className="flex items-center gap-2 rounded-sm border border-muted bg-transparent px-4 py-2 text-sm font-semibold text-zinc-500 transition-colors duration-300 hover:text-zinc-300 focus:text-zinc-300"
                            onClick={signOut}
                        >
                            <Github className="size-5" /> Deslogar
                        </button>
                        <button
                            className="flex items-center gap-2 rounded-sm border border-muted bg-transparent px-4 py-2 text-sm font-semibold text-zinc-300 transition-colors duration-300 hover:border-blue-600 hover:text-zinc-200 focus:border-blue-600 focus:text-zinc-200"
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleSendMessage(e)}
                        >
                            <Send className="size-5" /> Enviar
                        </button>
                    </>
                ) : (
                    <button
                        className="flex items-center gap-2 rounded-sm border border-muted bg-transparent px-4 py-2 text-sm font-semibold text-zinc-500 transition-colors duration-300 hover:text-zinc-300 focus:text-zinc-300"
                        onClick={signIn}
                    >
                        <Github className="size-5" /> Faça login para deixar uma mensagem
                    </button>
                )}
            </div>
            <div className="h-[1px] w-full bg-muted"></div>
            <GuestsMessages />
        </section>
    )
}
