'use client'

import TextTab from './TextTab'
import DesignTab from './DesignTab'
import LineTab from './LineTab'

const TABS = [
  { key: 'teks', label: '📝 Isi Teks' },
  { key: 'desain', label: '🎨 Desain Huruf' },
  { key: 'garis', label: '📏 Garis & Kertas' },
]

export default function ControlSidebar({
  activeTab,
  setActiveTab,
  text,
  setText,
  loadPreset,
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
    <section className="no-print w-full lg:w-[450px] bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-fit lg:sticky lg:top-6">
      <div className="flex border-b border-slate-200 bg-slate-50">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 py-3 text-sm font-semibold border-b-2 transition cursor-pointer ${
              activeTab === tab.key
                ? 'border-emerald-600 text-emerald-700 bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-5 flex-1 overflow-y-auto max-h-[70vh]">
        {activeTab === 'teks' && <TextTab text={text} setText={setText} loadPreset={loadPreset} />}

        {activeTab === 'desain' && (
          <DesignTab
            fontFamily={fontFamily}
            setFontFamily={setFontFamily}
            fontSize={fontSize}
            setFontSize={setFontSize}
            yOffset={yOffset}
            setYOffset={setYOffset}
            letterSpacing={letterSpacing}
            setLetterSpacing={setLetterSpacing}
            inkColor={inkColor}
            setInkColor={setInkColor}
            tracingMode={tracingMode}
            setTracingMode={setTracingMode}
          />
        )}

        {activeTab === 'garis' && (
          <LineTab
            lineHeight={lineHeight}
            setLineHeight={setLineHeight}
            lineColorTheme={lineColorTheme}
            setLineColorTheme={setLineColorTheme}
            shadingMode={shadingMode}
            setShadingMode={setShadingMode}
            emptyLinesCount={emptyLinesCount}
            setEmptyLinesCount={setEmptyLinesCount}
            lineWidth={lineWidth}
            setLineWidth={setLineWidth}
            hasHeader={hasHeader}
            setHasHeader={setHasHeader}
            hasRedMargin={hasRedMargin}
            setHasRedMargin={setHasRedMargin}
            paperSize={paperSize}
            setPaperSize={setPaperSize}
            customLineColor={customLineColor}
            setCustomLineColor={setCustomLineColor}
            customLineColor2={customLineColor2}
            setCustomLineColor2={setCustomLineColor2}
            autoWrap={autoWrap}
            setAutoWrap={setAutoWrap}
            customGuideLines={customGuideLines}
            setCustomGuideLines={setCustomGuideLines}
          />
        )}
      </div>

      <div className="bg-slate-50 border-t border-slate-100 p-4 text-center text-[11px] text-slate-400">
        Dibuat secara presisi untuk mencocokkan pola lembar Buku Elok / Menulis Halus.
      </div>
    </section>
  )
}
