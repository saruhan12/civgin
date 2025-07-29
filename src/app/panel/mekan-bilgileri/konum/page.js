'use client'
import Sidebar from '../../../../components/Sidebar'
import Link from 'next/link'

export default function KonumDetails() {
  return (
    <div className="app-container">
      <Sidebar />

      <main className="content flex flex-col items-center p-6">
        <div className="bg-sky-50 rounded-lg shadow-md p-6 w-full max-w-md">
          <Link href="/mekan-bilgileri" className="text-sky-600 hover:underline">
            &larr; Geri
          </Link>

          <h1 className="text-2xl font-bold text-sky-700 mt-4 mb-4">
            Konum
          </h1>

          <p>Kuzguncuk Mah. Çengelköy Cd. No:10, Üsküdar/İstanbul</p>
          <a
            href="https://maps.google.com"
            target="_blank"
            className="mt-2 inline-block text-blue-600 underline"
          >
            Haritada Gör
          </a>
        </div>
      </main>
    </div>
  )
}