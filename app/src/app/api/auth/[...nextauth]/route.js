import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
const bcrypt = require('bcrypt');
const userServices = require("@/services/user.services");

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {label: "Email", type: "text"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials, req) {
                const userFound = await userServices.getUserByEmail(credentials.email);
                console.log(userFound);
                if (!userFound) {
                    throw new Error("User not found");
                }

                const matchPassword = await bcrypt.compare(credentials.password, userFound.password);
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
    }
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};