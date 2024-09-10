import 'next-auth'

declare module 'next-auth' {
    interface Session {
        user: {
            id: string // Adicione a propriedade `id` ao tipo `User`
            name?: string | null
            email?: string | null
            image?: string | null
        }
    }
}
