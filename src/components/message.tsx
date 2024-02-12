import { useEffect, useState } from 'react'

interface MessageProps {
    data: {
        id: string
        message: string
        github: string
    }
    date: string
}
export default function Message({ data, date }: MessageProps) {
    const [profile, setProfile] = useState({} as any)
    useEffect(() => {
        fetch(`https://api.github.com/users/${data.github}`).then((data) => {
            data.json().then((profile) => {
                setProfile(profile)
            })
        })
    }, [data.github])
    return (
        <li className="flex flex-col gap-4 rounded-md border-[1px] border-muted-foreground/25 p-8" key={data.id}>
            <span>{data.message}</span>
            <div className="flex items-center justify-between gap-3">
                <img src={`https://github.com/${data.github}.png`} className="size-8 rounded-full object-cover" />
                <p className="font-medium text-zinc-400">{profile.name}</p>
                <span className="flex-1 text-end text-sm font-medium text-muted-foreground">há {date}</span>
            </div>
        </li>
    )
}
