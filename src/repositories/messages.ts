'use server'
import prisma from '@/lib/prisma'

export const getMessages = async () => {
    const messages = await prisma.guestMessage.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    })

    return messages
}

export const createMessage = async (data: { github: string; message: string }) => {
    const messageCrated = await prisma.guestMessage.create({
        data: {
            github: data.github,
            message: data.message,
        },
    })

    return messageCrated
}

export const deleteMessage = async (id: string) => {
    const messageDeleted = await prisma.guestMessage.delete({
        where: {
            id,
        },
    })

    return messageDeleted
}
