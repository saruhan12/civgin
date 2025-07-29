import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Çıvgın",
  description: "Mekan Bilgileri, İstatistikleri, Yorumları ve Profil",
}

export default function PanelLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {children}
      </main>
    </>
  )
}