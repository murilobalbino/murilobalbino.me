import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        const query = await prisma?.guestMessage.findMany()
        return NextResponse.json({
            ok: true,
            data: query,
        })
    } catch (error) {
        console.error('Error fetching guest messages:', error)
        return NextResponse.json({
            ok: false,
            error: 'Something went wrong.',
        })
    }
}
