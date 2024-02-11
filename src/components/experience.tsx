import Image from 'next/image'

import { z } from 'zod'

const experienceSchema = z.object({
    item: z
        .object({
            key: z.string().default(''),
            company: z.string().default(''),
            description: z.string().default(''),
            date: z.string().default(''),
        })
        .optional(),
})

export default function Experience({ item }: z.infer<typeof experienceSchema>) {
    return (
        <div className="group flex items-center gap-4" data-skeleton={!item}>
            <Image
                src={`/${item?.key}.png`}
                className="h-fit rounded-full border-4 border-muted-foreground/50 object-contain group-data-[skeleton=true]:hidden"
                alt={`${item?.key}-logo`}
                width={40}
                height={40}
            />
            <div className="hidden size-10 animate-pulse rounded-full bg-zinc-700 group-data-[skeleton=true]:block"></div>
            <div className="flex flex-col group-data-[skeleton=true]:gap-2 group-data-[skeleton=true]:*:animate-pulse group-data-[skeleton=true]:*:rounded-full group-data-[skeleton=true]:*:bg-zinc-700">
                <h1 className="group-data-[skeleton=true]:h-3 group-data-[skeleton=true]:w-10">{item?.company}</h1>
                <p className="w-44 text-sm text-muted-foreground group-data-[skeleton=true]:h-3">{item?.description}</p>
                <span className="w-56 text-xs  text-muted-foreground group-data-[skeleton=true]:h-3">{item?.date}</span>
            </div>
        </div>
    )
}
