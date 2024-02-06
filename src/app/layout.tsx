import NavBar from '@/components/nav-bar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Murilo Balbino - Desenvolvedor Front-end',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} flex`}>
                <NavBar />
                <main className="m-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-between px-8 py-14">
                    {children}
                </main>
            </body>
        </html>
    )
}
