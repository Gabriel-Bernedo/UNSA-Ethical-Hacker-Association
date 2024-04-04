// import { PrismaAdapter } from '@next-auth/prisma-adapter'
// import NextAuth from 'next-auth/next'
// import { prisma } from '@/database/prisma'
// import GitHubProvider from 'next-auth/providers/github'

// export const authOptions = {
//   providers : [
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//   ],
//   secret: process.env.SECRET,
//   adapter: PrismaAdapter(prisma),
// }

// const handler = NextAuth(authOptions)

// export {handler as GET, handler as POST}

import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import {compare} from "bcrypt"
import { createUser, getUserByEmail, getUserById } from '@/services/user.services';

// const bcrypt = require('bcrypt');
// const userServices = require("@/adaptadores/user.services");

//credenciales para iniciar sesion
const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {label: "Email", type: "text"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials, req) {
                const userFound = await getUserByEmail(credentials.email);
                console.log(userFound);
                if (!userFound) {
                    throw new Error("User not found");
                }

                const matchPassword = await compare(credentials.password, userFound.password);
                if (!matchPassword) throw new Error("Wrong password");

                return {
                    email: userFound.email,
                    name: userFound.name,
                    role: userFound.roleId
                }
            }
        }),
    ],
    callbacks: {
        async jwt({token, user}) {
            if (user) {
                token.role = user.role
            }
            return token
        },
        async session({session, token}) {
            if (session?.user) {
                session.user.role = token.role
                return session
            }
        }
    },
    secret: process.env.SECRET
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};
