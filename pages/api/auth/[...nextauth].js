import { getUserByEmail } from "@/controllers/userController";
import { checkPW } from "@/utils/utils";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const options = {
  providers: [
    CredentialsProvider({
        type: 'credentials',
        name: 'Credentials',
        credentials: {
        },

        async authorize(Credentials) {
            const user = await getUserByEmail(Credentials.email, true);
            if (!user) {
              throw new Error('Invalid credential');
            }
            const isValid = await checkPW(Credentials.password, user.password);
            if (!isValid) {
              throw new Error('Invalid credential');
            }
            return {
              email: user.email,
              firstName: user.firstName,
              lastName: user.lastName,
              isAdmin: user.isAdmin
            };
        }
    })
  ],
  pages: {
    signIn: '/auth/login',
    signOut: '/auth/logout'
  },
  session: {
    strategy: 'jwt',
    maxAge: 60 * 10,
  },
  callbacks: {
    jwt: async ( { token, user}) => {
      user && (token.user = user)
      return token;
    },
    session: async ( { session, token }) => {
      session.user = token?.user;
      return session;
    }
  }
}

export default NextAuth(options);