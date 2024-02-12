import { AuthContextProvider } from '@/contexts/auth.context'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Livro de Visitas - Murilo Balbino - Desenvolvedor Front-end',
}

export default function GuestBookLayout({ children }: { children: React.ReactNode }) {
    return <AuthContextProvider>{children}</AuthContextProvider>
}
