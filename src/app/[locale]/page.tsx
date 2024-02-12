import Experience from '@/components/experience'
import Resume from '@/components/resume'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronRight, Download } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
    return (
        <section className="flex w-full flex-col gap-6">
            <Resume />
            <Card>
                <CardHeader className="flex-row justify-between">
                    <CardTitle className="text-xl">📋 Sobre Mim</CardTitle>
                    <CardDescription className="flex cursor-pointer items-center gap-1 transition-colors duration-300 hover:text-blue-600">
                        Saber mais <ChevronRight className="size-4" />
                    </CardDescription>
                </CardHeader>
                <CardContent className="*:text-muted-foreground">
                    <p>
                        Olá, meu nome é Murilo Balbino, sou um desenvolvedor front-end dedicado, com ampla experiência
                        em tecnologias como NodeJS, ReactJS e VueJS, especializado em soluções robustas e amigáveis ao
                        usuário, priorizando escalabilidade, acessibilidade e performance.
                    </p>
                </CardContent>
            </Card>

            <div className="flex gap-6 max-lg:flex-col">
                <Card className="w-1/2 max-lg:w-full">
                    <CardHeader className="flex-row justify-between">
                        <CardTitle className="text-xl">💼 Experiências</CardTitle>
                        <CardDescription className="flex cursor-pointer items-center gap-1 transition-colors duration-300 hover:text-blue-600">
                            <Link
                                href={'https://www.linkedin.com/in/murilo-balbino/'}
                                target="_blank"
                                className=" flex cursor-pointer items-center gap-1 transition-colors duration-300 hover:text-blue-600"
                            >
                                Ver todos <ChevronRight className="size-4" />
                            </Link>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                        <Experience
                            item={{
                                company: 'Fluxo',
                                date: 'Julho 2023 - Janeiro 2024 (6 meses)',
                                description: 'Desenvolvedor Front-end',
                                key: 'fluxo',
                            }}
                        />
                        <Experience />
                        <Experience />
                        <Experience />
                        <Link href={'/cv/murilobalbino.pdf'} target="_blank">
                            <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-sm bg-blue-600 py-1.5 text-zinc-300 transition-colors duration-300 hover:text-zinc-100">
                                Baixar meu curriculo <Download className="size-4" />
                            </button>
                        </Link>
                    </CardContent>
                </Card>

                <Card className="w-1/2 max-lg:w-full">
                    <CardHeader className="flex-row justify-between">
                        <CardTitle className="text-xl">📰 Últimos posts</CardTitle>
                        <CardDescription className="flex cursor-pointer items-center gap-1 transition-colors duration-300 hover:text-blue-600">
                            Ver todos <ChevronRight className="size-4" />
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid  place-items-center *:text-muted-foreground">
                        <div className="grid place-items-center gap-4">
                            <span className="rounded-full bg-muted-foreground/50 p-5 text-3xl opacity-50">🚀</span>
                            <p className="text-sm">Esta aréa ainda esta em desenvolvimento</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
