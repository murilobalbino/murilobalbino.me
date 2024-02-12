import { getMessages } from '@/repositories/messages'

export async function GET() {
    const messages = await getMessages()
    return new Response(JSON.stringify(messages), { status: 200 })
}
