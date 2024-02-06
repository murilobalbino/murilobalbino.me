'use client'

import {
    BookOpen,
    Disc3,
    FolderDot,
    Github,
    Home,
    Instagram,
    Laptop,
    Linkedin,
    Mail,
    MessageSquare,
    Newspaper,
    Settings,
    Share2,
} from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function NavBar() {
    const pathName = usePathname()
    const CONTENTS = [
        {
            text: 'Eu',
            items: [
                {
                    icon: BookOpen,
                    text: 'Sobre Mim',
                    href: '/about-me',
                },
                {
                    icon: FolderDot,
                    text: 'Projetos',
                    href: '/projects',
                },
                {
                    icon: Laptop,
                    text: 'Tecnologias e Ferramentas',
                    href: '/stacks',
                },
            ],
        },
        {
            text: 'Diário',
            items: [
                {
                    icon: MessageSquare,
                    text: 'Livro de Visitas',
                    href: '/guest-book',
                },
                {
                    icon: Newspaper,
                    text: 'Blog',
                    disabled: true,
                    href: '/blog',
                },
            ],
        },
        {
            text: 'Redes Sociais',
            items: [
                {
                    icon: Github,
                    text: 'Github',
                    href: 'https://github.com/murilobalbino',
                },
                {
                    icon: Linkedin,
                    text: 'Linkedin',
                    href: 'https://github.com/murilobalbino',
                },
                {
                    icon: Instagram,
                    text: 'Instagram',
                    href: 'https://github.com/murilobalbino',
                },
                {
                    icon: Mail,
                    text: 'Email',
                    href: 'https://github.com/murilobalbino',
                },
            ],
        },
    ]
    return (
        <nav className="flex w-1/6 flex-col border-r px-4 py-2 pb-0">
            {pathName.includes('/') && pathName.length !== 1 && (
                <div className="my-4 flex gap-4 border-b py-3">
                    <img src="https://via.placeholder.com/36" />
                    <div className="text-xs">
                        <p className="font-bold">Murilo Balbino</p>
                        <span className="text-slate-500">Desenvolvedor Front-end</span>
                    </div>
                    <div className="flex flex-1 items-center justify-end">
                        <Settings className="m-2 size-4 cursor-pointer transition-all duration-300 hover:text-blue-600" />
                    </div>
                </div>
            )}
            <div
                data-active={pathName === '/'}
                className="group mt-4 flex cursor-pointer items-center gap-2 rounded border border-foreground/0 p-2 px-3 text-sm font-semibold transition-all duration-300 hover:border-foreground/50 data-[active=true]:border-foreground/50"
            >
                <Home className="size-4 transition-all duration-300 group-hover:text-blue-600 group-data-[active=true]:text-blue-600" />
                Início
            </div>
            {CONTENTS.map((content, index) => (
                <ul key={index} className="my-2 flex flex-col gap-1 font-semibold">
                    <li className="mb-2 ml-2 text-xs text-slate-400">{content.text}</li>
                    {content.items.map((item, index) => (
                        <li
                            className="group flex w-full cursor-pointer items-center justify-between  rounded border border-foreground/0 p-2 px-3 text-sm transition-all duration-300 hover:border-foreground/50 data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-20"
                            key={index}
                            data-disabled={item.disabled}
                        >
                            <div className="flex items-center gap-2">
                                <item.icon className="size-4 transition-all duration-300 group-hover:text-blue-600 group-data-[active=true]:text-blue-600" />
                                {item.text}
                            </div>
                            {item.href.includes('http') && (
                                <Share2 className="size-3.5 text-end text-blue-950 transition-all duration-300 group-hover:text-blue-600" />
                            )}
                        </li>
                    ))}
                </ul>
            ))}
            <div className="flex flex-1 flex-col justify-end">
                <div data-play={false} className="group mb-2 flex items-center gap-2 border-t py-4">
                    <Disc3 className="text-foreground/20 group-data-[play=true]:animate-spin group-data-[play=true]:text-blue-600" />
                    <div className="flex w-full flex-col gap-1">
                        <p className="text-sm text-foreground/20 group-data-[play=true]:text-foreground/75">
                            Nada tocando agora
                        </p>
                        <div className="relative hidden h-[2px] w-3/4 rounded-xl bg-foreground/20 before:absolute before:h-full before:w-1/2 before:bg-blue-600 group-data-[play=true]:block"></div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
