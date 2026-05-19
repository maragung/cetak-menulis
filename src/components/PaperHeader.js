'use client'

export default function PaperHeader({
  studentName,
  setStudentName,
  studentClass,
  setStudentClass,
  studentDate,
  setStudentDate,
}) {
  return (
    <div className="mb-8 flex justify-between items-end border-b-2 border-slate-800 pb-4 text-slate-700 font-sans text-xs">
      <div className="space-y-2 flex-1">
        <div className="flex items-center gap-2">
          <span className="font-bold uppercase tracking-wider text-[10px]">Nama:</span>
          <input
            type="text"
            placeholder="Tulis nama siswa..."
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className="flex-1 max-w-[200px] bg-transparent border-b border-dashed border-slate-400 outline-none text-slate-950 font-medium pb-0.5 no-print"
          />
          <span className="hidden print:inline border-b border-slate-400 min-w-[150px] font-semibold">
            {studentName || '...........................'}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold uppercase tracking-wider text-[10px]">Kelas:</span>
          <input
            type="text"
            placeholder="Contoh: 1-A"
            value={studentClass}
            onChange={(e) => setStudentClass(e.target.value)}
            className="flex-1 max-w-[200px] bg-transparent border-b border-dashed border-slate-400 outline-none text-slate-950 font-medium pb-0.5 no-print"
          />
          <span className="hidden print:inline border-b border-slate-400 min-w-[150px] font-semibold">
            {studentClass || '...........................'}
          </span>
        </div>
      </div>

      <div className="text-center bg-slate-100 print:bg-slate-50 border border-slate-300 px-4 py-2 rounded-lg shadow-inner min-w-[90px]">
        <span className="block text-[8px] font-extrabold uppercase text-slate-500 tracking-wider">
          Nilai Paraf
        </span>
        <div className="h-8 flex items-center justify-center">
          <span className="text-slate-300 text-xs italic">Belum dinilai</span>
        </div>
      </div>

      <div className="space-y-2 text-right">
        <div className="flex items-center justify-end gap-2">
          <span className="font-bold uppercase tracking-wider text-[10px]">Tanggal:</span>
          <input
            type="text"
            placeholder="Hari / Tanggal"
            value={studentDate}
            onChange={(e) => setStudentDate(e.target.value)}
            className="bg-transparent border-b border-dashed border-slate-400 outline-none text-slate-950 font-medium text-right pb-0.5 no-print"
          />
          <span className="hidden print:inline border-b border-slate-400 min-w-[120px] font-semibold">
            {studentDate || '...........................'}
          </span>
        </div>
        <div className="text-[10px] text-slate-400 italic">Latihan Menulis Halus</div>
      </div>
    </div>
  )
}
