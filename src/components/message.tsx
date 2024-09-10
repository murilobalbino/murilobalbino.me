interface MessageProps {
    data: Message
    date: string
}
export default function Message({ data, date }: MessageProps) {
    return (
        <li className="flex flex-col gap-4 rounded-md border-[1px] border-muted-foreground/25 p-8" key={data.github}>
            <span>{data.message}</span>
            <div className="flex items-center justify-between gap-3">
                <img
                    src={`https://avatars.githubusercontent.com/u/${data.github}`}
                    className="size-8 rounded-full object-cover"
                />
                <p className="font-medium text-zinc-400">{data.name}</p>
                <span className="flex-1 text-end text-sm font-medium text-muted-foreground">há {date}</span>
            </div>
        </li>
    )
}
