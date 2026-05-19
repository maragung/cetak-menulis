'use client'

export default function HeaderBanner() {
  const handlePrint = () => {
    try {
      window.print()
    } catch (err) {
      console.error('Print gagal:', err)
    }
  }

  return (
    <header className="no-print bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-md px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="bg-white/20 p-2 rounded-lg">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tight">Cetak Tegak Bersambung</h1>
          <p className="text-xs text-teal-100">
            Media Belajar Menulis Indah (Buku Halus Kasar / Garis Lima) untuk Siswa & Anak
          </p>
        </div>
      </div>

      <button
        onClick={handlePrint}
        className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-5 py-2.5 rounded-lg font-bold transition shadow-lg transform active:scale-95 cursor-pointer"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
          />
        </svg>
        Cetak Lembar Latihan (Print)
      </button>
    </header>
  )
}
