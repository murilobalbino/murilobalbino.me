import prisma from '@/lib/prisma'
import { User } from 'firebase/auth'

export async function sendMessage(
    message: string,
    user: User,
): Promise<{
    state: 'cooldown' | 'error' | 'success'
    params?: any
}> {
    const githubData = await fetch(`https://api.github.com/user/${user.providerData[0].uid}`).then((res) => res.json())
    const github = githubData.login
    const userExists = await prisma.guestMessage.findFirst({
        where: {
            github: github,
        },
    })
    if (userExists) {
        return {
            state: 'error',
        }
    }

    await prisma.guestMessage.create({
        data: {
            message: message,
            github: github,
        },
    })

    return {
        state: 'success',
    }
}

export async function deleteMessage(messageId: string, user: User) {
    const query = await prisma.guestMessage.delete({
        where: {
            id: messageId,
        },
    })

    return query
}
