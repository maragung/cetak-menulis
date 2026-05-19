'use client'

import { useEffect } from 'react'
import HeaderBanner from '@/components/HeaderBanner'
import ControlSidebar from '@/components/ControlSidebar'
import PaperPreview from '@/components/PaperPreview'
import ErrorBoundary from '@/components/ErrorBoundary'
import usePersistedState from '@/hooks/usePersistedState'
import { TEXT_PRESETS } from '@/constants/presets'

const DEFAULT_TEXT = TEXT_PRESETS[0].text

export default function Home() {
  const [text, setText] = usePersistedState('text', DEFAULT_TEXT)
  const [fontFamily, setFontFamily] = usePersistedState('fontFamily', 'Cedarville Cursive')
  const [fontSize, setFontSize] = usePersistedState('fontSize', 36)
  const [yOffset, setYOffset] = usePersistedState('yOffset', -2)
  const [letterSpacing, setLetterSpacing] = usePersistedState('letterSpacing', 2)
  const [lineHeight, setLineHeight] = usePersistedState('lineHeight', 100)
  const [inkColor, setInkColor] = usePersistedState('inkColor', '#1e293b')
  const [tracingMode, setTracingMode] = usePersistedState('tracingMode', 'solid')
  const [hasRedMargin, setHasRedMargin] = usePersistedState('hasRedMargin', true)
  const [hasHeader, setHasHeader] = usePersistedState('hasHeader', true)
  const [emptyLinesCount, setEmptyLinesCount] = usePersistedState('emptyLinesCount', 4)
  const [shadingMode, setShadingMode] = usePersistedState('shadingMode', 'classic')
  const [lineColorTheme, setLineColorTheme] = usePersistedState('lineColorTheme', 'classic')
  const [lineWidth, setLineWidth] = usePersistedState('lineWidth', 1)
  const [studentName, setStudentName] = usePersistedState('studentName', '')
  const [studentClass, setStudentClass] = usePersistedState('studentClass', '')
  const [studentDate, setStudentDate] = usePersistedState('studentDate', '')
  const [paperSize, setPaperSize] = usePersistedState('paperSize', 'A4')
  const [activeTab, setActiveTab] = usePersistedState('activeTab', 'teks')
  const [customLineColor, setCustomLineColor] = usePersistedState('customLineColor', '#ef4444')
  const [customLineColor2, setCustomLineColor2] = usePersistedState('customLineColor2', '#0284c7')
  const [autoWrap, setAutoWrap] = usePersistedState('autoWrap', false)
  const [customGuideLines, setCustomGuideLines] = usePersistedState('customGuideLines', [])

  useEffect(() => {
    console.log('App mounted')
  }, [])

  useEffect(() => {
    const style = document.createElement('style')
    style.id = 'print-style'
    style.textContent = `
      @media print {
        @page { size: ${paperSize}; margin: 5mm; }
      }
    `
    const existing = document.getElementById('print-style')
    if (existing) existing.remove()
    document.head.appendChild(style)
    return () => style.remove()
  }, [paperSize])

  const loadPreset = (presetText) => setText(presetText)

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-slate-100 flex flex-col font-sans antialiased">
        <HeaderBanner />

        <main className="flex-1 flex flex-col lg:flex-row gap-6 p-4 md:p-6 max-w-[1600px] w-full mx-auto">
          <ControlSidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            text={text}
            setText={setText}
            loadPreset={loadPreset}
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

          <PaperPreview
            paperSize={paperSize}
            text={text}
            fontFamily={fontFamily}
            fontSize={fontSize}
            yOffset={yOffset}
            letterSpacing={letterSpacing}
            inkColor={inkColor}
            tracingMode={tracingMode}
            lineHeight={lineHeight}
            lineColorTheme={lineColorTheme}
            shadingMode={shadingMode}
            lineWidth={lineWidth}
            hasRedMargin={hasRedMargin}
            hasHeader={hasHeader}
            emptyLinesCount={emptyLinesCount}
            studentName={studentName}
            setStudentName={setStudentName}
            studentClass={studentClass}
            setStudentClass={setStudentClass}
            studentDate={studentDate}
            setStudentDate={setStudentDate}
            customLineColor={customLineColor}
            customLineColor2={customLineColor2}
            autoWrap={autoWrap}
            customGuideLines={customGuideLines}
          />
        </main>
      </div>
    </ErrorBoundary>
  )
}
