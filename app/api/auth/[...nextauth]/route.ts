import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/prisma/client";

//  https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=409462012672-kbre6h8qkpag6340o0fpc3pi07tdo8v7.apps.googleusercontent.com&scope=openid%20email%20profile&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fgoogle&state=1r6SEd3xWHB6ar3eG2Lw7r3HRhLzSyCfdKtb5xGPwFc&code_challenge=4IG1oAdHglFSG2sG9GBhU_PbvqNQBOTellBDg0UGnYw&code_challenge_method=S256&service=lso&o2v=2&flowName=GeneralOAuthFlow

const handler = NextAuth({

    adapter: PrismaAdapter(prisma),

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    pages: {
        signIn: "/signin",
        // signOut: "/"
    }

})


export { handler as GET, handler as POST }