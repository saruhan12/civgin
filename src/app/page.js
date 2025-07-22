'use client'
import Sidebar from '../components/Sidebar'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="app-container bg-gradient-to-b from-yellow-50 to-white">
      <Sidebar />

      <main className="content">
        <div className="logo-wrapper mt-6">
          <Image
            src="/logo.png"
            alt="Çıvgın Logo"
            width={140}
            height={140}
            priority
          />
        </div>

        <h1 className="welcome-title text-green-700 text-3xl font-extrabold mt-4">
          Çıvgın'a Hoşgeldiniz!
        </h1>

        <p className="mt-4 text-gray-700 max-w-xl mx-auto text-base">
          Mekan sahipleri için özel olarak hazırlanmış bu yönetim paneli üzerinden
          mekan bilgilerinizi güncelleyebilir, istatistiklerinizi takip edebilir,
          kullanıcı yorumlarını inceleyebilir ve profil bilgilerinizi düzenleyebilirsiniz.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto">
          <Link href="/mekan-bilgileri" className="action-button bg-green-100 hover:bg-green-200 text-green-800">
            Mekan Bilgileri
          </Link>
          <Link href="/mekan-istatistikleri" className="action-button bg-yellow-100 hover:bg-yellow-200 text-yellow-800">
            Mekan İstatistikleri
          </Link>
          <Link href="/mekan-yorumlari" className="action-button bg-blue-100 hover:bg-blue-200 text-blue-800">
            Mekan Yorumları
          </Link>
          <Link href="/profil" className="action-button bg-purple-100 hover:bg-purple-200 text-purple-800">
            Profil
          </Link>
        </div>
      </main>
    </div>
  )
}