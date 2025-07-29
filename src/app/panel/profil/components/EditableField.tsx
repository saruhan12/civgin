import { useState } from 'react'

export default function EditableField({ label, value }) {
  const [editMode, setEditMode] = useState(false)
  const [inputValue, setInputValue] = useState(value)

  const handleSave = () => {
    setEditMode(false)
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-2">
      <span className="text-gray-600 font-medium">{label}</span>
      {editMode ? (
        <div className="flex gap-2 mt-1 sm:mt-0">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="border px-2 py-1 rounded text-sm"
          />
          <button
            onClick={handleSave}
            className="text-green-600 text-sm font-semibold hover:underline"
          >
            Kaydet
          </button>
        </div>
      ) : (
        <div
          className="text-gray-800 cursor-pointer mt-1 sm:mt-0 hover:text-blue-600"
          onClick={() => setEditMode(true)}
        >
          {inputValue}
        </div>
      )}
    </div>
  )
}