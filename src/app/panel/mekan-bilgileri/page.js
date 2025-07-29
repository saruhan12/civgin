'use client'
import Sidebar from '../../../components/Sidebar'
import Link from 'next/link'

export default function MekanBilgileriPage() {
  return (
    <div className="app-container">

      <main className="content flex flex-col items-center p-6">
        <h1 className="text-3xl font-bold text-green-700 mb-8 text-center">
          Mekan Bilgileri
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
          {/* Menü & Fiyatlar */}
          <Link
            href="/mekan-bilgileri/menu"
            className="
              bg-amber-100 hover:bg-amber-200
              rounded-2xl shadow-md
              p-6 text-center
              flex flex-col justify-center
              transition
            "
          >
            <h2 className="text-xl font-semibold mb-2">Menü &amp; Fiyatlar</h2>
            <p className="text-gray-700 mb-4">Türk Kahvesi, Espresso, Latte</p>
            <span className="text-green-600 font-medium">
              Daha fazla göster &rarr;
            </span>
          </Link>

          {/* Puan */}
          <Link
            href="/mekan-bilgileri/puan"
            className="
              bg-emerald-100 hover:bg-emerald-200
              rounded-2xl shadow-md
              p-6 text-center
              flex flex-col justify-center
              transition
            "
          >
            <h2 className="text-xl font-semibold mb-2">Puan</h2>
            <p className="text-gray-700 mb-4">4.7 / 5 ⭐</p>
            <span className="text-green-600 font-medium">
              Daha fazla göster &rarr;
            </span>
          </Link>

          {/* Konum */}
          <Link
            href="/mekan-bilgileri/konum"
            className="
              bg-sky-100 hover:bg-sky-200
              rounded-2xl shadow-md
              p-6 text-center
              flex flex-col justify-center
              transition
            "
          >
            <h2 className="text-xl font-semibold mb-2">Konum</h2>
            <p className="text-gray-700 mb-4">Kadıköy, İstanbul</p>
            <span className="text-green-600 font-medium">
              Daha fazla göster &rarr;
            </span>
          </Link>

          {/* Çalışma Saatleri */}
          <Link
            href="/mekan-bilgileri/saatler"
            className="
              bg-violet-100 hover:bg-violet-200
              rounded-2xl shadow-md
              p-6 text-center
              flex flex-col justify-center
              transition
            "
          >
            <h2 className="text-xl font-semibold mb-2">Çalışma Saatleri</h2>
            <p className="text-gray-700 mb-4">09:00 – 22:00</p>
            <span className="text-green-600 font-medium">
              Daha fazla göster &rarr;
            </span>
          </Link>
        </div>
      </main>
    </div>
  )
}