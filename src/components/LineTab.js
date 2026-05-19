'use client'

export default function LineTab({
  lineHeight,
  setLineHeight,
  lineColorTheme,
  setLineColorTheme,
  shadingMode,
  setShadingMode,
  emptyLinesCount,
  setEmptyLinesCount,
  lineWidth,
  setLineWidth,
  hasHeader,
  setHasHeader,
  hasRedMargin,
  setHasRedMargin,
  paperSize,
  setPaperSize,
  customLineColor,
  setCustomLineColor,
  customLineColor2,
  setCustomLineColor2,
  autoWrap,
  setAutoWrap,
  customGuideLines,
  setCustomGuideLines,
}) {
  return (
    <div className="space-y-5 animate-fadeIn">
      <div>
        <label className="block text-sm font-bold text-slate-700 mb-1.5">Ukuran Kertas:</label>
        <select
          value={paperSize}
          onChange={(e) => setPaperSize(e.target.value)}
          className="w-full px-3 py-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-800"
        >
          <option value="A4">A4 (210 × 297 mm)</option>
          <option value="Letter">Letter (216 × 279 mm)</option>
          <option value="Legal">Legal (216 × 356 mm)</option>
        </select>
      </div>

      <div>
        <div className="flex justify-between items-center mb-1">
          <label className="block text-sm font-bold text-slate-700">Tinggi Kolom Baris:</label>
          <span className="text-xs font-mono font-semibold bg-slate-100 px-2 py-0.5 rounded text-slate-600">
            {lineHeight}px
          </span>
        </div>
        <input
          type="range"
          min="70"
          max="160"
          value={lineHeight}
          onChange={(e) => setLineHeight(Number(e.target.value))}
          className="w-full accent-emerald-600 cursor-pointer"
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-700 mb-1.5">Warna Garis Buku:</label>
        <select
          value={lineColorTheme}
          onChange={(e) => setLineColorTheme(e.target.value)}
          className="w-full px-3 py-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-800"
        >
          <option value="classic">Klasik (Pink & Biru Sekolah)</option>
          <option value="blue">Biru Seluruhnya</option>
          <option value="gray">Abu-abu Soft</option>
          <option value="purple">Ungu Lembut</option>
          <option value="green">Hijau Segar</option>
          <option value="orange">Jingga Hangat</option>
          <option value="rainbow">Pelangi</option>
          <option value="sepia">Sepia Klasik</option>
          <option value="custom">Kustom...</option>
        </select>
        {lineColorTheme === 'custom' && (
          <div className="mt-2 space-y-2">
            <div className="flex items-center gap-3">
              <label className="text-xs text-slate-500 w-12">Warna 1:</label>
              <input
                type="color"
                value={customLineColor}
                onChange={(e) => setCustomLineColor(e.target.value)}
                className="w-10 h-10 p-0.5 border border-slate-300 rounded cursor-pointer"
              />
              <span className="text-xs font-mono text-slate-500">{customLineColor}</span>
            </div>
            <div className="flex items-center gap-3">
              <label className="text-xs text-slate-500 w-12">Warna 2:</label>
              <input
                type="color"
                value={customLineColor2}
                onChange={(e) => setCustomLineColor2(e.target.value)}
                className="w-10 h-10 p-0.5 border border-slate-300 rounded cursor-pointer"
              />
              <span className="text-xs font-mono text-slate-500">{customLineColor2}</span>
            </div>
          </div>
        )}
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-700 mb-1.5">
          Warna Kolom Aktif (Huruf Kecil):
        </label>
        <select
          value={shadingMode}
          onChange={(e) => setShadingMode(e.target.value)}
          className="w-full px-3 py-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-800"
        >
          <option value="classic">Arsir Biru Lembut</option>
          <option value="gray">Arsir Abu Lembut</option>
          <option value="none">Polos (Tanpa Arsir)</option>
        </select>
      </div>

      <div>
        <div className="flex justify-between items-center mb-1">
          <label className="block text-sm font-bold text-slate-700">
            Jumlah Baris Kosong di Bawah:
          </label>
          <span className="text-xs font-mono font-semibold bg-slate-100 px-2 py-0.5 rounded text-slate-600">
            {emptyLinesCount} baris
          </span>
        </div>
        <input
          type="range"
          min="0"
          max="10"
          value={emptyLinesCount}
          onChange={(e) => setEmptyLinesCount(Number(e.target.value))}
          className="w-full accent-emerald-600 cursor-pointer"
        />
        <p className="text-xs text-slate-400 mt-1">
          Sediakan baris kosong bergaris di bagian bawah lembar kerja agar anak bisa menulis
          mandiri.
        </p>
      </div>

      <div>
        <div className="flex justify-between items-center mb-1">
          <label className="block text-sm font-bold text-slate-700">Ketebalan Garis Panduan:</label>
          <span className="text-xs font-mono font-semibold bg-slate-100 px-2 py-0.5 rounded text-slate-600">
            {lineWidth}px
          </span>
        </div>
        <input
          type="range"
          min="1"
          max="3"
          step="0.5"
          value={lineWidth}
          onChange={(e) => setLineWidth(Number(e.target.value))}
          className="w-full accent-emerald-600 cursor-pointer"
        />
      </div>

      <div className="space-y-2 pt-2 border-t border-slate-100">
        <label className="block text-sm font-bold text-slate-700 mb-1">Fitur Lembar Kerja:</label>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={hasHeader}
            onChange={(e) => setHasHeader(e.target.checked)}
            className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 h-4.5 w-4.5"
          />
          <span className="text-sm text-slate-700 font-medium">
            Tampilkan Header Lembar Tugas (Nama, Kelas, dll.)
          </span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={hasRedMargin}
            onChange={(e) => setHasRedMargin(e.target.checked)}
            className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 h-4.5 w-4.5"
          />
          <span className="text-sm text-slate-700 font-medium">
            Tampilkan Garis Pinggir Merah (Buku Klasik)
          </span>
        </label>

        <div className="pt-2 border-t border-slate-100">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-bold text-slate-700">Garis Bantu Kustom:</label>
            <button
              onClick={() =>
                setCustomGuideLines([
                  ...customGuideLines,
                  { id: Date.now(), position: 50, offset: 0 },
                ])
              }
              className="text-xs px-3 py-1 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition cursor-pointer"
            >
              + Tambah Garis
            </button>
          </div>
          <p className="text-xs text-slate-400 mb-2">
            Tambah garis putus-putus untuk menandai batas huruf, descender, dll.
          </p>

          {customGuideLines.length === 0 && (
            <p className="text-xs text-slate-400 italic text-center py-2 border border-dashed border-slate-200 rounded-lg">
              Belum ada garis. Klik "+ Tambah Garis" untuk mulai.
            </p>
          )}

          {customGuideLines.map((g) => (
            <div
              key={g.id}
              className="mb-2 p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-600">Garis #{g.id.toString().slice(-4)}</span>
                <button
                  onClick={() =>
                    setCustomGuideLines(customGuideLines.filter((x) => x.id !== g.id))
                  }
                  className="text-red-500 hover:text-red-700 text-xs cursor-pointer"
                >
                  🗑️ Hapus
                </button>
              </div>
              <div>
                <div className="flex justify-between items-center mb-0.5">
                  <label className="text-[11px] text-slate-500">Posisi:</label>
                  <span className="text-[11px] font-mono text-slate-500">{g.position}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={g.position}
                  onChange={(e) =>
                    setCustomGuideLines(
                      customGuideLines.map((x) =>
                        x.id === g.id ? { ...x, position: Number(e.target.value) } : x,
                      ),
                    )
                  }
                  className="w-full accent-emerald-600 cursor-pointer"
                />
              </div>
              <div>
                <div className="flex justify-between items-center mb-0.5">
                  <label className="text-[11px] text-slate-500">Offset:</label>
                  <span className="text-[11px] font-mono text-slate-500">
                    {g.offset > 0 ? '+' : ''}{g.offset}px
                  </span>
                </div>
                <input
                  type="range"
                  min="-20"
                  max="20"
                  value={g.offset}
                  onChange={(e) =>
                    setCustomGuideLines(
                      customGuideLines.map((x) =>
                        x.id === g.id ? { ...x, offset: Number(e.target.value) } : x,
                      ),
                    )
                  }
                  className="w-full accent-emerald-600 cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={autoWrap}
            onChange={(e) => setAutoWrap(e.target.checked)}
            className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 h-4.5 w-4.5"
          />
          <span className="text-sm text-slate-700 font-medium">
            Potong Baris Otomatis (Auto-wrap)
          </span>
        </label>
      </div>
    </div>
  )
}
