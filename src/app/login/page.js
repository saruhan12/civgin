'use client'
import { signIn, useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function LoginPage() {
  const { data: session } = useSession()
  const router = useRouter()
  const params = useSearchParams()
  const error = params.get('error')

  // If already signed in, go straight to the panel
  useEffect(() => {
    if (session) {
      router.push('/panel')
    }
  }, [session, router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-6">Giriş Yap</h2>

        {error && (
          <p className="text-red-500 mb-4">
            Giriş yapılamadı. Lütfen tekrar deneyin.
          </p>
        )}

        {/* Google */}
        <button
          onClick={() => signIn('google', { callbackUrl: '/panel' })}
          className="w-full flex items-center justify-center gap-2 mb-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          {/* You can swap in a Google SVG icon here */}
          Google ile Giriş Yap
        </button>

        {/* Twitter */}
        <button
          onClick={() => signIn('twitter', { callbackUrl: '/panel' })}
          className="w-full flex items-center justify-center gap-2 mb-4 py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition"
        >
          Twitter ile Giriş Yap
        </button>

        {/* Instagram */}
        <button
          onClick={() => signIn('instagram', { callbackUrl: '/panel' })}
          className="w-full flex items-center justify-center gap-2 py-3 
                     bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 
                     text-white rounded-lg hover:opacity-90 transition"
        >
          Instagram ile Giriş Yap
        </button>
      </div>
    </div>
  )
}
