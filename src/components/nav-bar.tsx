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
    Menu,
    MessageSquare,
    Newspaper,
    Settings,
    Share2,
} from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

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
                    disabled: true,
                },
                {
                    icon: FolderDot,
                    text: 'Projetos',
                    href: '/projects',
                    disabled: true,
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
                    disabled: true,
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

    const router = useRouter()
    const [menu, setMenu] = useState(false)
    const handleLink = (href: string) => {
        if (menu) setMenu(false)
        router.push(href)
    }
    const handleMenu = () => setMenu(!menu)

    return (
        <>
            <div className="fixed z-30 mt-4 hidden w-full flex-row-reverse gap-4 px-8 *:transition-colors *:duration-300 max-sm:flex">
                <button
                    data-state={menu}
                    className="w-fit rounded-md border border-accent p-2 hover:bg-accent disabled:pointer-events-none disabled:opacity-50 data-[state=true]:bg-accent"
                    onClick={handleMenu}
                >
                    <Menu className="size-4" />
                </button>
                <button
                    data-state={false}
                    className="w-fit rounded-md border border-accent p-2 disabled:pointer-events-none disabled:opacity-50 data-[state=true]:bg-accent"
                    disabled
                >
                    <Settings className="size-4" />
                </button>
            </div>
            <nav
                data-state={menu}
                className="flex w-1/6 min-w-52 flex-col border-r px-4 py-2 pb-0 animate-in max-sm:fixed max-sm:z-20 max-sm:w-full max-sm:rounded-b max-sm:border-b max-sm:bg-background max-sm:pt-10 max-sm:data-[state=false]:hidden"
            >
                {pathName.includes('/') && pathName.length !== 1 && (
                    <div className="my-4 flex gap-4 border-b py-3">
                        <img src="https://github.com/murilobalbino.png" className="size-9" />
                        <div className="text-xs">
                            <p className="font-bold">Murilo Balbino</p>
                            <span className="text-slate-500">Desenvolvedor Front-end</span>
                        </div>
                        <div className="group flex flex-1 items-center justify-end" data-menu-state={menu}>
                            <Settings className="m-2 size-4 cursor-pointer transition-all duration-300 hover:text-blue-600 group-data-[menu-state=true]:hidden" />
                        </div>
                    </div>
                )}
                <div
                    data-active={pathName === '/'}
                    onClick={() => handleLink('/')}
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
                                onClick={() => handleLink(item.href)}
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
        </>
    )
}
