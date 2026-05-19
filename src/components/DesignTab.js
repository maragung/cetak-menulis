'use client'

import { FONT_PRESETS, INK_COLORS } from '@/constants/presets'

export default function DesignTab({
  fontFamily,
  setFontFamily,
  fontSize,
  setFontSize,
  yOffset,
  setYOffset,
  letterSpacing,
  setLetterSpacing,
  inkColor,
  setInkColor,
  tracingMode,
  setTracingMode,
}) {
  return (
    <div className="space-y-5 animate-fadeIn">
      <div>
        <label className="block text-sm font-bold text-slate-700 mb-1.5">
          Gaya Tulisan (Font Cursive):
        </label>
        <select
          value={fontFamily}
          onChange={(e) => setFontFamily(e.target.value)}
          className="w-full px-3 py-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-800"
        >
          {FONT_PRESETS.map((font) => (
            <option key={font.id} value={font.id}>
              {font.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2">Mode Tulisan:</label>
        <div className="grid grid-cols-3 gap-2">
          {[
            { value: 'solid', label: 'Hitam Jelas' },
            { value: 'tracing', label: 'Jiplak (Pencil)' },
            { value: 'outline', label: 'Garis Tepi' },
          ].map((mode) => (
            <button
              key={mode.value}
              onClick={() => setTracingMode(mode.value)}
              className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition cursor-pointer ${
                tracingMode === mode.value
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {mode.label}
            </button>
          ))}
        </div>
        <p className="text-xs text-slate-400 mt-1.5">
          {tracingMode === 'tracing' &&
            '✏️ Tinta tipis agar anak bisa menjiplak langsung di atas kertas menggunakan pensil.'}
          {tracingMode === 'solid' && '📖 Tulisan tebal jelas untuk dibaca atau ditiru disalin.'}
          {tracingMode === 'outline' &&
            '⭕ Garis outline transparan untuk belajar presisi coretan.'}
        </p>
      </div>

      <div>
        <div className="flex justify-between items-center mb-1">
          <label className="block text-sm font-bold text-slate-700">Ukuran Huruf:</label>
          <span className="text-xs font-mono font-semibold bg-slate-100 px-2 py-0.5 rounded text-slate-600">
            {fontSize}px
          </span>
        </div>
        <input
          type="range"
          min="20"
          max="65"
          value={fontSize}
          onChange={(e) => setFontSize(Number(e.target.value))}
          className="w-full accent-emerald-600 cursor-pointer"
        />
      </div>

      <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
        <div className="flex justify-between items-center mb-1">
          <label className="block text-sm font-bold text-emerald-900">
            Penyelarasan Vertikal (Y-Offset):
          </label>
          <span className="text-xs font-mono font-bold bg-emerald-200/60 px-2 py-0.5 rounded text-emerald-800">
            {yOffset}px
          </span>
        </div>
        <input
          type="range"
          min="-40"
          max="40"
          value={yOffset}
          onChange={(e) => setYOffset(Number(e.target.value))}
          className="w-full accent-emerald-600 cursor-pointer"
        />
        <div className="flex justify-between text-[10px] text-emerald-600 font-medium mt-1">
          <span>Geser Bawah ⬇️</span>
          <span>Presisi Garis</span>
          <span>Geser Atas ⬆️</span>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-1">
          <label className="block text-sm font-bold text-slate-700">Jarak Antar Huruf:</label>
          <span className="text-xs font-mono font-semibold bg-slate-100 px-2 py-0.5 rounded text-slate-600">
            {letterSpacing}px
          </span>
        </div>
        <input
          type="range"
          min="-2"
          max="20"
          value={letterSpacing}
          onChange={(e) => setLetterSpacing(Number(e.target.value))}
          className="w-full accent-emerald-600 cursor-pointer"
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-700 mb-1.5">Warna Tinta:</label>
        <div className="flex gap-2">
          {INK_COLORS.map((col) => (
            <button
              key={col.hex}
              onClick={() => setInkColor(col.hex)}
              className={`flex-1 flex flex-col items-center gap-1 p-2 rounded-lg border text-center transition cursor-pointer ${
                inkColor === col.hex
                  ? 'border-slate-800 bg-slate-100'
                  : 'border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span
                className="w-5 h-5 rounded-full border border-slate-300"
                style={{ backgroundColor: col.hex }}
              />
              <span className="text-[10px] font-medium text-slate-600">{col.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
