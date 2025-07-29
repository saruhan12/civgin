export default function ProfileField({ label, value }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-2">
      <span className="text-gray-600 font-medium">{label}</span>
      <span className="text-gray-800">{value}</span>
    </div>
  )
}