import Resume from '@/components/resume'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronRight } from 'lucide-react'

export default function Home() {
    return (
        <section className="flex w-full flex-col">
            <Resume />
            <Card>
                <CardHeader className="flex-row justify-between">
                    <CardTitle className="text-xl">📋 Sobre Mim</CardTitle>
                    <CardDescription className="flex cursor-pointer items-center gap-1 transition-colors duration-300 hover:text-blue-600">
                        Saber mais <ChevronRight className="size-4" />
                    </CardDescription>
                </CardHeader>
            </Card>
        </section>
    )
}
