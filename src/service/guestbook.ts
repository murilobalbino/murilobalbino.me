import prisma from '@/lib/prisma'

export async function getAllMessage() {
    try {
        const data = await fetch('/api/guestbook')
            .then((res) => res.json())
            .then((data) => data)
        return data
    } catch (error) {
        return null
    }
}

export async function sendMessage(message: string, user: any, name: any) {
    try {
        const data = await fetch('/api/guestbook/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message, user, name }),
        })
            .then((res) => res.json())
            .then((data) => data)
        return data
    } catch (error) {
        return null
    }
}

export async function getSessionMessage(user: string | undefined) {
    try {
        const data = await fetch(`/api/guestbook/${user}`)
            .then((res) => res.json())
            .then((data) => data)
        return data.data !== null
    } catch (error) {
        return null
    }
}

export async function deleteMessage(messageId: string, user: string) {
    const query = await prisma.guestMessage.delete({
        where: {
            id: messageId,
        },
    })
    return query
}
