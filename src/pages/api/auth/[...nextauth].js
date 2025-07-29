import NextAuth from 'next-auth'
import GoogleProvider     from 'next-auth/providers/google'
import TwitterProvider    from 'next-auth/providers/twitter'
import InstagramProvider  from 'next-auth/providers/instagram'  // built-in in v4+

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId:     process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    TwitterProvider({
      clientId:     process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      version:      '2.0',              // for Twitter v2 API
    }),
    InstagramProvider({
      clientId:     process.env.INSTAGRAM_CLIENT_ID,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/login',    // your custom login page
  },
})
