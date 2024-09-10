import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        const data = await request.json()
        const { user, message, name } = data
        const userExists = await prisma.guestMessage.findFirst({
            where: {
                github: String(user),
            },
        })
        if (userExists) return NextResponse.json({ error: 'User already exists!', data: { user, message } })

        const created = await prisma.guestMessage.create({
            data: {
                message: message,
                github: String(user),
                name: name,
            },
        })

        return NextResponse.json({ ok: true, data: { github: user, message, name, createdAt: created.createdAt } })
    } catch (error) {
        console.error('Error processing request:', error)
        return NextResponse.error()
    }
}
