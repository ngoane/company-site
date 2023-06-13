import { getUserByEmail } from "@/controllers/userController";
import { checkPW } from "@/utils/utils";
import NextAuth from "next-auth/next";
import { CredentialsProvider } from "next-auth/providers";

const options = {
  providers: [
    CredentialsProvider({
        id: 'credentials',
        name: 'Credentials',
        credentials: {
          email: { label: 'email', type: 'text'},
          password: { label: 'password', type: 'password'},
        },

        async authorize(Credentials) {
            const user = await getUserByEmail(credentials.email, selectPW=true);
            if (!user) {
              throw new Error('Invalid credential');
            }
            if (checkPW(credentials.password, user.password)) {
              throw new Error('Invalid credential');
            }
            return user;
        }
    })
  ],
  pages: {
    signIn: '/auth/login'
  },
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    jwt: async ( { token, user}) => {
      user && (token.payload = { email: user.email, })
      return token;
    },
    session: async ( { session, token }) => {
      session.payload = token.payload;
      return session;
    }
  }
}

export default NextAuth(options);