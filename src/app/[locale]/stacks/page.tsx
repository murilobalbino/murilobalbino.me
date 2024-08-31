import Stack from '@/components/stack'
import stacks from '@/config/stacks'

export default async function StacksPage() {
    const techs: {
        name: string
        icon: string
        stack: string
    }[] = []
    stacks.forEach((stack) => {
        stack.techs.forEach((tech) => {
            techs.push({ ...tech, stack: stack.href })
        })
    })
    console.log(techs)

    return (
        <div className="flex w-full flex-col gap-4">
            <h1 className="text-3xl font-bold">Tecnologias e Ferramentas</h1>
            <p className="mb-5 text-muted-foreground">
                Explore as tecnologias e ferramentas que impulsionam a minha experiência em desenvolvimento. Eu
                seleciono e uso meticulosamente essas ferramentas para criar soluções robustas e eficientes, priorizando
                sempre a experiência do usuário.
            </p>
            {stacks.map((stack, index) => (
                <div key={``} className="flex flex-col gap-4">
                    <h1 className="text-2xl font-bold">{stack.label}</h1>

                    <ul className="grid grid-cols-4 gap-2 max-lg:grid-cols-3 max-sm:grid-cols-2">
                        {techs.map((tech, i) => (
                            <>{tech.stack === stack.href && <Stack key={i} tech={tech} />}</>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}
