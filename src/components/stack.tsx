import Image from 'next/image'
import { HTMLAttributes } from 'react'

interface StackProps {
    tech: { name: string, icon: string }
}

export default function Stack({ tech, ...props }: HTMLAttributes<HTMLDivElement> & StackProps) {
    return (
        <div
            {...props}
            className="flex items-center gap-3 rounded-md bg-accent/50 p-3 text-accent-foreground transition-colors hover:bg-accent/70 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring dark:backdrop-blur-2xl"
        >
            <div className="relative flex w-fit items-center justify-center overflow-hidden rounded-lg p-2">
                <Image
                    src={`/techs/${tech.icon || 'nextjs'}.svg`}
                    className="z-10 bg-transparent "
                    width={24}
                    height={24}
                    alt={`${tech.icon}-icon`}
                />
                <Image
                    src={`/techs/${tech.icon || 'nextjs'}.svg`}
                    className="absolute inset-0 z-0 size-[125%]  opacity-80 blur-lg"
                    width={24}
                    height={24}
                    alt={`${tech.icon}-icon`}
                />
            </div>
            <p>{tech.name}</p>
        </div>
    )
}
