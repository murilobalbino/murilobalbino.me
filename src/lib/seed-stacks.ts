import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const STACKS = [
    {
        label: 'Front-End',
        href: 'front-end',
        techs: [
            {
                name: 'CSS',
                icon: 'css',
            },
            {
                name: 'HTML',
                icon: 'html',
            },
            {
                name: 'JavaScript',
                icon: 'javascript',
            },
            {
                name: 'Next.js',
                icon: 'next',
            },
            {
                name: 'Radix',
                icon: 'radix',
            },
            {
                name: 'Shadcn',
                icon: 'Shadcn',
            },
            {
                name: 'React',
                icon: 'react',
            },

            {
                name: 'Redux',
                icon: 'redux',
            },
            {
                name: 'Sass',
                icon: 'sass',
            },
            {
                name: 'Vue',
                icon: 'vuejs',
            },
            {
                name: 'StyledComponents',
                icon: 'styledcomponents',
            },
            {
                name: 'Tailwind CSS',
                icon: 'tailwind',
            },
            {
                name: 'TypeScript',
                icon: 'typescript',
            },
            {
                name: 'Socket.io',
                icon: 'socketio',
            },
            {
                name: 'Vite',
                icon: 'vite',
            },
            {
                name: 'Zustand',
                icon: 'zustand',
            },
        ],
    },
    {
        label: 'Testes',
        href: 'tests',
        techs: [
            {
                name: 'Cypress',
                icon: 'cypress',
            },
            {
                name: 'Jest',
                icon: 'jest',
            },
            {
                name: 'Playwright',
                icon: 'playwright',
            },
            {
                name: 'Vitest',
                icon: 'vitest',
            },
        ],
    },
    {
        label: 'Design',
        href: 'design',
        techs: [
            {
                name: 'Figma',
                icon: 'figma',
            },
        ],
    },
    {
        label: 'Documentação',
        href: 'documentation',
        techs: [
            {
                name: 'Swagger',
                icon: 'swagger',
            },
            {
                name: 'Storybook',
                icon: 'storybook',
            },
        ],
    },
    {
        label: 'Observabilidade e analytics',
        href: 'observability-analytics',
        techs: [
            {
                name: 'Clarity',
                icon: 'clarity',
            },
            {
                name: 'Datadog',
                icon: 'Datadog',
            },
        ],
    },
    {
        label: 'Back-end',
        href: 'back-end',
        techs: [
            {
                name: 'Express',
                icon: 'express',
            },
            {
                name: 'Java',
                icon: 'java',
            },
            {
                name: 'JavaScript',
                icon: 'javascript',
            },
            {
                name: 'Node',
                icon: 'nodejs',
            },
            {
                name: 'Prisma',
                icon: 'prisma',
            },
            {
                name: 'Socket.io',
                icon: 'socketio',
            },
            {
                name: 'TypeScript',
                icon: 'typescript',
            },
        ],
    },
    {
        label: 'Banco de dados',
        href: 'database',
        techs: [
            {
                name: 'MongoDB',
                icon: 'mondodb',
            },
            {
                name: 'MySQL',
                icon: 'mysql',
            },
            {
                name: 'PostgreSQL',
                icon: 'postgresql',
            },
        ],
    },
    {
        label: 'Infrasestrutura',
        href: 'infrastructure',
        techs: [
            {
                name: 'Docker',
                icon: 'docker',
            },
            {
                name: 'Vercel',
                icon: 'vercel',
            },
            {
                name: 'Supabase',
                icon: 'supabase',
            },
        ],
    },
    {
        label: 'Controle de versão',
        href: 'version-control',
        techs: [
            {
                name: 'Git',
                icon: 'git',
            },
            {
                name: 'GitHub',
                icon: 'github',
            },
        ],
    },
]

async function main() {
    STACKS.forEach(async (stack) => {
        const { label, techs, href } = stack
        const stackExists = await prisma.stack.findFirst({
            where: {
                name: label,
            },
        })
        console.log('stackExists', stackExists)
        if (stackExists) return
        const createdStack = await prisma.stack.create({
            data: {
                name: label,
                href: href,
                techs: {
                    create: techs.map((tech) => ({
                        name: tech.name,
                        key: tech.icon,
                    })),
                },
            },
        })
        console.log(createdStack)
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
    })
