'use client'
import Sidebar from '../../../../components/Sidebar'
import Link from 'next/link'

export default function MenuDetails() {
  const items = [
    { name: 'Türk Kahvesi', price: 30 },
    { name: 'Espresso', price: 50 },
    { name: 'Latte', price: 55 },
  ]

  return (
    <div className="app-container">
      <Sidebar />

      <main className="content flex flex-col items-center p-6">
        <div className="bg-amber-50 rounded-lg shadow-md p-6 w-full max-w-md">
          <Link href="/mekan-bilgileri" className="text-amber-600 hover:underline">
            &larr; Geri
          </Link>

          <h1 className="text-2xl font-bold text-amber-700 mt-4 mb-4">
            Menü & Fiyatlar
          </h1>

          <ul className="list-disc ml-5 space-y-2">
            {items.map(i => (
              <li key={i.name}>
                {i.name} – {i.price} TL
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}