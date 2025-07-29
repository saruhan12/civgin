'use client'
import Image from 'next/image'
import {
  UsersIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  StarIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from '@heroicons/react/24/solid'

export default function Mekanİstatistikleri() {
  const metrics = [
    {
      title: 'Aylık Ziyaretçi',
      value: '1.234',
      change: '+8.4%',
      trend: 'up',
      icon: <UsersIcon className="w-6 h-6 text-green-500" />,
    },
    {
      title: 'Haftalık Gelir',
      value: '₺56.780',
      change: '-3.1%',
      trend: 'down',
      icon: <CurrencyDollarIcon className="w-6 h-6 text-yellow-500" />,
    },
    {
      title: 'Ortalama Puan',
      value: '4.7',
      change: '+0.2',
      trend: 'up',
      icon: <StarIcon className="w-6 h-6 text-blue-500" />,
    },
    {
      title: 'Toplam Yorum',
      value: '342',
      change: '+15%',
      trend: 'up',
      icon: <ChartBarIcon className="w-6 h-6 text-purple-500" />,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Mekan İstatistikleri
          </h1>
          <p className="text-gray-600 mt-1">
            İşletmenize dair en güncel performans verileri aşağıda.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {metrics.map(({ title, value, change, trend, icon }) => (
            <div
              key={title}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-medium text-gray-500">{title}</h2>
                {icon}
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-3xl font-semibold text-gray-800">
                  {value}
                </span>
                <span
                  className={`flex items-center text-sm font-medium ${
                    trend === 'up' ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {trend === 'up' ? (
                    <ArrowUpIcon className="w-4 h-4 inline-block" />
                  ) : (
                    <ArrowDownIcon className="w-4 h-4 inline-block" />
                  )}
                  {change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid gap-8 lg:grid-cols-2 mb-12">
          {/* Visits Over Time */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg font-medium text-gray-700 mb-4">
              Ziyaretçi Trafiği (Son 30 Gün)
            </h3>
            <div className="h-48 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
              [Grafik Alanı]
            </div>
          </div>

          {/* Revenue Breakdown */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg font-medium text-gray-700 mb-4">
              Günlük Gelir Dağılımı
            </h3>
            <div className="h-48 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
              [Grafik Alanı]
            </div>
          </div>
        </div>

        {/* Recent Reviews */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-medium text-gray-700 mb-4">
            Son 5 Yorum
          </h3>
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500">
                <th className="pb-2">Kullanıcı</th>
                <th className="pb-2">Puan</th>
                <th className="pb-2">Tarih</th>
                <th className="pb-2">Yorum</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {[
                {
                  user: 'Ayşe K.',
                  rating: 5,
                  date: '2025-07-25',
                  text: 'Hizmet mükemmeldi, çok memnun kaldım!',
                },
                {
                  user: 'Mehmet T.',
                  rating: 4,
                  date: '2025-07-23',
                  text: 'Genel olarak iyi, rotada biraz karışıklık vardı.',
                },
                {
                  user: 'Elif S.',
                  rating: 5,
                  date: '2025-07-20',
                  text: 'Harika bir deneyim, kesinlikle öneriyorum.',
                },
                {
                  user: 'Can Y.',
                  rating: 3,
                  date: '2025-07-18',
                  text: 'Fiyat-performans dengesi biraz zayıftı.',
                },
                {
                  user: 'Zeynep D.',
                  rating: 4,
                  date: '2025-07-16',
                  text: 'Temiz ve düzenli bir mekan.',
                },
              ].map((r, i) => (
                <tr key={i} className="border-t">
                  <td className="py-2">{r.user}</td>
                  <td className="py-2">
                    <StarIcon className="w-4 h-4 inline-block text-yellow-400" />{' '}
                    {r.rating}
                  </td>
                  <td className="py-2">{r.date}</td>
                  <td className="py-2">{r.text}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
