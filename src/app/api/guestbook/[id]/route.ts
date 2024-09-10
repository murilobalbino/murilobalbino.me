import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const query = await prisma?.guestMessage.findUnique({
        where: {
            github: params.id,
        },
    })
    return NextResponse.json({
        ok: true,
        data: query,
    })
}
