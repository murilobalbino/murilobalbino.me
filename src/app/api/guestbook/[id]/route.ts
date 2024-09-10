import prisma from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const query = await prisma?.guestMessage.findUnique({
            where: {
                github: params.id,
            },
        })
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
