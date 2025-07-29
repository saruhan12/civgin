'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import { comments } from "../../../../mock/comments"
import styles from "../page.module.css"

export default function CommentList() {
  const [sortType, setSortType] = useState("newest")
  const [selectedRatings, setSelectedRatings] = useState([1, 2, 3, 4, 5])
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const router = useRouter()

  const toggleRating = (rating) => {
    setSelectedRatings((prev) =>
      prev.includes(rating)
        ? prev.filter((r) => r !== rating)
        : [...prev, rating]
    )
  }

  const filtered = comments
    .filter((c) => selectedRatings.includes(c.rating))
    .sort((a, b) => {
      if (sortType === "newest") return new Date(b.date) - new Date(a.date)
      if (sortType === "oldest") return new Date(a.date) - new Date(b.date)
      if (sortType === "highest") return b.rating - a.rating
      return a.rating - b.rating
    })

  return (
    <div className="space-y-4">
      <h1 className={styles.heading}>Mekan Yorumları</h1>

      {/* Filtre paneli */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        {/* Sıralama */}
        <div className="space-x-2">
          <label className="font-medium text-gray-700">Sırala:</label>
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className={styles.selectBox}
          >
            <option value="newest">En Yeni</option>
            <option value="oldest">En Eski</option>
            <option value="highest">En Yüksek Puan</option>
            <option value="lowest">En Düşük Puan</option>
          </select>
        </div>

        {/* Dropdown: puan filtre */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className={styles.dropdownButton}
          >
            Puan Seçimi ⭐️
          </button>

          {dropdownOpen && (
            <div className={styles.dropdownMenu}>
              {[5, 4, 3, 2, 1].map((r) => (
                <label key={r} className={styles.ratingCheckbox}>
                  <input
                    type="checkbox"
                    checked={selectedRatings.includes(r)}
                    onChange={() => toggleRating(r)}
                  />
                  <span>{r} ⭐️</span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Yorumlar listesi */}
      {filtered.length === 0 ? (
        <p className="text-gray-500">Seçilen kriterlere uygun yorum bulunamadı.</p>
      ) : (
        filtered.map((c) => (
          <div key={c.id} className={styles.card}>
            <div className="flex justify-between mb-1">
              <span className={styles.cardName}>{c.name}</span>
              <span className={styles.cardDate}>{c.date}</span>
            </div>

            <div className={`mb-2 ${styles.cardStars}`}>
              {c.rating} ⭐️ <span className="text-sm text-gray-500">({c.rating})</span>
            </div>

            <p className={styles.commentText}>{c.comment}</p>

            {/* YANIT VARSA GÖSTER */}
            {c.response?.trim() && (
              <div className="mt-4 border-t pt-2 text-sm text-gray-600">
                <strong>Yanıtınız:</strong> {c.response}
              </div>
            )}

            {/* HER ZAMAN GÖRÜNÜR */}
            <div className="mt-4 text-right">
              <button
                onClick={() => router.push(`/mekan-yorumlari/yanitla/${c.id}`)}
                className="text-sm text-[#5AB57B] font-medium hover:underline"
              >
                Yanıt ver
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  )
}