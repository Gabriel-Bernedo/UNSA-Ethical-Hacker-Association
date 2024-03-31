import { PrismaAdapter } from '@next-auth/prisma-adapter'
import NextAuth from 'next-auth/next'
import { prisma } from '@/database/prisma'
import GitHubProvider from 'next-auth/providers/github'

export const authOptions = {
  providers : [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.SECRET,
  adapter: PrismaAdapter(prisma),
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}
