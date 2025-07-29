// src/app/page.js
import Link from 'next/link'

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-50 to-white px-4">
      <h1 className="text-5xl font-extrabold text-[#708238] mb-4">Çıvgın</h1>
      <p className="text-gray-600 mb-8 text-center max-w-lg">
        Mekan yönetimini tek yerden yapın. İstatistiklerinizi görün, 
        yorumlara cevap verin ve işletmenizi büyütün.
      </p>
      <div className="flex gap-4">
        <Link
          href="/login"
          className="px-6 py-3 bg-[#F4C24E] text-white rounded-lg font-medium hover:bg-[#D9A73A] transition"
        >
          Giriş Yap
        </Link>
        <Link
          href="/login?signup=true"
          className="px-6 py-3 bg-transparent border-2 border-[#708238] text-[#708238] rounded-lg font-medium hover:bg-[#708238] hover:text-white transition"
        >
          Kayıt Ol
        </Link>
      </div>
    </main>
  )
}
