// middleware.ts
import { withAuth } from 'next-auth/middleware'

export default withAuth({
  pages: {
    signIn: '/login',
  },
})

// only apply to /panel/*
export const config = { matcher: ['/panel/:path*'] }
