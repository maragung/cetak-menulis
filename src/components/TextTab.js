'use client'

import { useRef } from 'react'
import { TEXT_PRESETS } from '@/constants/presets'
import * as mammoth from 'mammoth'

export default function TextTab({ text, setText, loadPreset }) {
  const fileInputRef = useRef(null)

  const handleImportClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    const ext = file.name.split('.').pop().toLowerCase()

    try {
      if (ext === 'txt') {
        const content = await file.text()
        setText(content)
      } else if (ext === 'docx') {
        const arrayBuffer = await file.arrayBuffer()
        const result = await mammoth.extractRawText({ arrayBuffer })
        setText(result.value.trim())
      } else if (ext === 'doc') {
        alert(
          'Format .doc tidak didukung langsung. Silakan buka file di Word dan simpan sebagai .docx atau .txt, lalu impor lagi.',
        )
        return
      } else {
        alert('Format file tidak didukung. Gunakan .txt atau .docx.')
        return
      }
    } catch (err) {
      console.error('Gagal membaca file:', err)
      alert('Gagal membaca file. Pastikan file tidak rusak.')
    }

    e.target.value = ''
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      // fallback: select textarea text
      const ta = document.querySelector('#teks-textarea')
      ta?.select()
      document.execCommand('copy')
    }
  }

  const handlePaste = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText()
      setText(clipboardText)
    } catch {
      alert('Tidak dapat membaca clipboard. Pastikan izin clipboard diizinkan.')
    }
  }

  const handleClear = () => setText('')

  return (
    <div className="space-y-5 animate-fadeIn">
      <div>
        <label className="block text-sm font-bold text-slate-700 mb-1.5">
          Preset Teks Latihan:
        </label>
        <select
          defaultValue=""
          onChange={(e) => {
            const preset = TEXT_PRESETS[e.target.value]
            if (preset) loadPreset(preset.text)
            e.target.value = ''
          }}
          className="w-full px-3 py-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-800"
        >
          <option value="">-- Pilih preset --</option>
          {TEXT_PRESETS.map((preset, idx) => (
            <option key={idx} value={idx}>
              {preset.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <div className="flex justify-between items-center mb-1">
          <label className="block text-sm font-bold text-slate-700">Ketik Teks Di Sini:</label>
          <span className="text-xs text-slate-400">Tekan Enter untuk baris baru</span>
        </div>
        <div className="flex gap-2 mb-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg border border-slate-200 transition cursor-pointer"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            Salin (Copy)
          </button>
          <button
            onClick={handlePaste}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg border border-slate-200 transition cursor-pointer"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            Tempel (Paste)
          </button>
          <button
            onClick={handleClear}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-red-50 hover:bg-red-100 text-red-700 rounded-lg border border-red-200 transition cursor-pointer"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            Hapus (Clear)
          </button>
        </div>
        <textarea
          id="teks-textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={8}
          className="w-full px-3 py-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-slate-800 font-sans"
          placeholder="Tulis kalimat latihan untuk dicetak di sini..."
        />
        <p className="text-xs text-slate-400 mt-1">
          Setiap baris di atas akan otomatis digambar sejajar di atas garis buku tulis.
        </p>
      </div>

      <div>
        <button
          onClick={handleImportClick}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-semibold text-sm rounded-lg border border-emerald-200 transition cursor-pointer"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
            />
          </svg>
          Import Teks dari File (.txt / .docx)
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept=".txt,.docx,.doc"
          onChange={handleFileChange}
          className="hidden"
        />
        <p className="text-xs text-slate-400 mt-1.5">
          Didukung: .txt (teks biasa) dan .docx (Word). File .doc harus dikonversi dulu ke .docx.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 p-3.5 rounded-lg flex gap-3">
        <div className="text-amber-600 shrink-0">
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="text-xs text-amber-900 space-y-1">
          <p className="font-bold">Tips Penyelarasan:</p>
          <p>
            Karena setiap font memiliki rasio ukuran tinggi yang berbeda, gunakan slider{' '}
            <strong>"Penyelarasan Vertikal"</strong> di tab Desain Huruf agar badan huruf kecil
            (seperti 'a', 'e', 'm') tepat berada di dalam kolom berwarna biru/abu.
          </p>
        </div>
      </div>
    </div>
  )
}
