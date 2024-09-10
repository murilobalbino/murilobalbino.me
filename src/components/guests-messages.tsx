import { useMessage } from '@/contexts/messages.context'
import { differenceBetweenDates } from '@/lib/math'
import { getAllMessage } from '@/service/guestbook'
import { useEffect } from 'react'
import Message from './message'

export default function GuestsMessages() {
    const { messages, setMessages } = useMessage()

    useEffect(() => {
        getAllMessage().then((data) => {
            setMessages(data.data)
        })
    }, [setMessages])
    return (
        <ul className="w-full">
            {messages.map((data: any, i: any) => {
                const date = differenceBetweenDates(new Date().getTime(), new Date(data.createdAt).getTime())
                return <Message data={data} date={date} key={data} />
            })}
        </ul>
    )
}
