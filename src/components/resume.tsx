export default function Resume() {
    const STACKS = ['ReactJS', 'NextJS', 'Vue', 'NodeJS', 'TypeScript', 'JavaScript']

    return (
        <div className="flex gap-4">
            <img src={'https://github.com/murilobalbino.png'} className="size-24 rounded object-cover" />
            <div className="flex flex-1 flex-col justify-end gap-1">
                <h1 className="text-2xl font-bold">Murilo Balbino</h1>
                <h2 className="text-muted-foreground">
                    Desenvolvedor Front-End @ <span> None </span>
                </h2>
                <ul className="flex flex-wrap gap-2 max-sm:justify-center">
                    {STACKS.map((stack, i) => (
                        <li key={i} className="rounded bg-slate-900/75 px-2 py-1 text-xs font-bold">
                            {stack}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
