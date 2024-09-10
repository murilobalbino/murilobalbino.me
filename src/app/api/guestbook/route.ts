import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
    const query = await prisma?.guestMessage.findMany()
    return NextResponse.json({
        ok: true,
        data: query,
    })
}
