import jwt from 'jsonwebtoken'

export async function POST() {
    const secretKey = process.env.SECRET_KEY
    if (!secretKey) return new Response('Internal Server Error', { status: 500 })
    const token = jwt.sign({}, secretKey, { expiresIn: '1h' })
    return new Response(token, { status: 200 })
}
