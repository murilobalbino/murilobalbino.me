import { authOptions } from '@/lib/auth-options'
import NextAuth from 'next-auth/next'
import { NextRequest, NextResponse } from 'next/server'

const handler = NextAuth(authOptions)

export async function GET(request: NextRequest) {
    return handler(request, NextResponse)
}

export async function POST(request: NextRequest) {
    return handler(request, NextResponse)
}
