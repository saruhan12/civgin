'use client'
import Sidebar from '../../../components/Sidebar'
import Link from 'next/link'

export default function PuanDetails() {
  return (
    <div className="app-container">
      <Sidebar />

      <main className="content flex flex-col items-center p-6">
        <div className="bg-emerald-50 rounded-lg shadow-md p-6 w-full max-w-md">
          <Link href="/mekan-bilgileri" className="text-emerald-600 hover:underline">
            &larr; Geri
          </Link>

          <h1 className="text-2xl font-bold text-emerald-700 mt-4 mb-4">
            Puan
          </h1>

          <p className="text-yellow-600 font-bold text-xl">
            4.7 / 5 ⭐
          </p>
        </div>
      </main>
    </div>
  )
}