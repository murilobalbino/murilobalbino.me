import Stack from '@/components/stack'
import prisma from '@/lib/prisma'

export default async function StacksPage() {
    const stacks = await prisma.stack.findMany()
    const techs = await prisma.tech.findMany()
    return (
        <div className="flex w-full flex-col gap-4">
            <h1 className="text-3xl font-bold">Tecnologias e Ferramentas</h1>
            <p className="mb-5 text-muted-foreground">
                Explore as tecnologias e ferramentas que impulsionam a minha experiência em desenvolvimento. Eu
                seleciono e uso meticulosamente essas ferramentas para criar soluções robustas e eficientes, priorizando
                sempre a experiência do usuário.
            </p>
            {stacks.map((stack) => (
                <div key={stack.id} className="flex flex-col gap-4">
                    <h1 className="text-2xl font-bold">{stack.name}</h1>

                    <ul className="grid grid-cols-4 gap-2 max-lg:grid-cols-3 max-sm:grid-cols-2">
                        {techs.map((tech, i) => (
                            <>{tech.stackId === stack.id && <Stack key={i} tech={tech} />}</>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}
