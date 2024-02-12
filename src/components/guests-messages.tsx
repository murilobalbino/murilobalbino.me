import { differenceBetweenDates } from '@/lib/math'
import { useEffect, useState } from 'react'
import Message from './message'

export default function GuestsMessages() {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        fetch('/api/messages').then((data) => {
            data.json().then((messages) => {
                setMessages(messages)
            })
        })
    }, [])
    return (
        <ul className="w-full">
            {messages.map((data: any, i: any) => {
                const date = differenceBetweenDates(new Date().getTime(), new Date(data.createdAt).getTime())
                return <Message data={data} date={date} key={data.id} />
            })}
        </ul>
    )
}
