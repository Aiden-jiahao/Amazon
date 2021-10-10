import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Providers.Facebook({
      clientId: process.env.Facebook_ID,
      clientSecret: process.env.Facebook_SECRET,
    }),
    Providers.Instagram({
      clientId: process.env.Instagram_ID,
      clientSecret: process.env.Instagram_SECRET,
    }),
    Providers.LinkedIn({
      clientId: process.env.LinkedIn_ID,
      clientSecret: process.env.LinkedIn_SECRET,
    }),
    // ...add more providers here
  ],
});
