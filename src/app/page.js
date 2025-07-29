'use client'
import Image from 'next/image'
import Link from 'next/link'
import {
  InformationCircleIcon,
  ChartBarIcon,
  ChatBubbleBottomCenterTextIcon,
  UserCircleIcon,
} from '@heroicons/react/24/solid'

const features = [
  {
    href: '/mekan-bilgileri',
    icon: InformationCircleIcon,
    title: 'Mekan Bilgileri',
    desc: 'İşletme adınız, konumunuz ve iletişim bilgileriniz burada.',
    color: 'yellow',
  },
  {
    href: '/mekan-istatistikleri',
    icon: ChartBarIcon,
    title: 'İstatistikler',
    desc: 'Ziyaretçi trafiği ve performansınızı grafiklerle görün.',
    color: 'green',
  },
  {
    href: '/mekan-yorumlari',
    icon: ChatBubbleBottomCenterTextIcon,
    title: 'Yorumlar',
    desc: 'Müşteri geri bildirimlerini okuyun ve yanıt verin.',
    color: 'blue',
  },
  {
    href: '/profil',
    icon: UserCircleIcon,
    title: 'Profiliniz',
    desc: 'Şifre ve hesap ayarlarınızı yönetin.',
    color: 'purple',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <main className="container mx-auto px-4 py-16">
        {/* Hero */}
        <div className="flex flex-col items-center text-center">
          <div className="w-36 h-36 rounded-full overflow-hidden shadow-xl">
            <Image src="/logo.png" alt="Çıvgın Logo" width={144} height={144} priority />
          </div>
          <h1 className="mt-6 text-4xl font-extrabold text-[#708238]">
            Çıvgın’a Hoşgeldiniz!
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl">
            İşletmenizi kolayca yönetin: bilgilerinizi güncelleyin, performansınızı görün, 
            yorumları yanıtlayın ve hesap ayarlarınızı yapın.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ href, icon: Icon, title, desc, color }) => (
            <Link key={href} href={href} className="group">
              <div className="relative p-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200">
                <div
                  className={`inline-flex p-3 rounded-full bg-${color}-100 group-hover:bg-${color}-200 transition`}
                >
                  <Icon className={`w-8 h-8 text-${color}-600 group-hover:text-${color}-800 transition`} />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-800">{title}</h3>
                <p className="mt-2 text-gray-500 text-sm">{desc}</p>
                <span className="absolute bottom-4 right-4 text-gray-300 group-hover:text-gray-500 transition">
                  &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
