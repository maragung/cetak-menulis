'use client'

import GuideLines from './GuideLines'
import PaperHeader from './PaperHeader'
import { FONT_PRESETS } from '@/constants/presets'

const MM_TO_PX = 3.78

const PAPER_HEIGHTS_PX = {
  A4: 297 * MM_TO_PX,
  Letter: 279.4 * MM_TO_PX,
  Legal: 355.6 * MM_TO_PX,
}

const PAPER_DIMENSIONS = {
  A4: { minHeight: '297mm', label: 'A4' },
  Letter: { minHeight: '279.4mm', label: 'Letter' },
  Legal: { minHeight: '355.6mm', label: 'Legal' },
}

const PADDING_PX = 17 * MM_TO_PX
const HEADER_HEIGHT_PX = 110
const FOOTER_HEIGHT_PX = 35

function getTextStyle({ fontFamily, fontSize, letterSpacing, yOffset, inkColor, tracingMode }) {
  const fontPreset = FONT_PRESETS.find((f) => f.id === fontFamily)
  const baseStyle = {
    fontFamily: fontPreset ? `var(${fontPreset.cssVar})` : 'serif',
    fontSize: `${fontSize}px`,
    letterSpacing: `${letterSpacing}px`,
    transform: `translateY(${yOffset}px)`,
  }

  switch (tracingMode) {
    case 'tracing':
      return { ...baseStyle, color: inkColor, opacity: 0.25 }
    case 'outline':
      return {
        ...baseStyle,
        color: 'transparent',
        WebkitTextStroke: '1px rgba(15, 23, 42, 0.4)',
      }
    default:
      return { ...baseStyle, color: inkColor, opacity: 1 }
  }
}

function buildPages(linesArray, emptyLinesCount, linesPerPage) {
  if (linesArray.length === 0) {
    const empty = Math.min(emptyLinesCount, linesPerPage)
    return [Array.from({ length: empty }, () => null)]
  }

  const pages = []
  let remaining = [...linesArray]

  while (remaining.length > 0) {
    const chunkSize = remaining.length >= linesPerPage ? linesPerPage : remaining.length
    pages.push(remaining.splice(0, chunkSize))
  }

  const lastPage = pages[pages.length - 1]
  const spaceLeft = linesPerPage - lastPage.length
  const emptyToAdd = Math.min(emptyLinesCount, spaceLeft)
  for (let i = 0; i < emptyToAdd; i++) {
    lastPage.push(null)
  }

  return pages
}

export default function PaperPreview({
  text,
  fontFamily,
  fontSize,
  yOffset,
  letterSpacing,
  inkColor,
  tracingMode,
  lineHeight,
  lineColorTheme,
  shadingMode,
  lineWidth,
  hasRedMargin,
  hasHeader,
  emptyLinesCount,
  studentName,
  setStudentName,
  studentClass,
  setStudentClass,
  studentDate,
  setStudentDate,
  paperSize = 'A4',
  customLineColor,
  customLineColor2,
  autoWrap,
  customGuideLines,
}) {
  const linesArray = text.split('\n')
  const dim = PAPER_DIMENSIONS[paperSize] || PAPER_DIMENSIONS.A4

  const paperHeightPx = PAPER_HEIGHTS_PX[paperSize] || PAPER_HEIGHTS_PX.A4
  const availablePx = paperHeightPx - PADDING_PX - (hasHeader ? HEADER_HEIGHT_PX : 0) - FOOTER_HEIGHT_PX
  const linesPerPage = Math.max(1, Math.floor(availablePx / lineHeight))

  const pages = buildPages(linesArray, emptyLinesCount, linesPerPage)

  const totalPages = pages.length

  return (
    <section className="flex-1 flex flex-col items-center gap-6">
      {pages.map((pageLines, pageIdx) => (
        <div
          key={pageIdx}
          className={`print-area print-area-${paperSize.toLowerCase()} w-full max-w-[800px] bg-white shadow-xl border border-slate-200 rounded-md transition-all duration-300 flex flex-col`}
          style={{
            minHeight: dim.minHeight,
            padding: '7mm 5mm 10mm 5mm',
            backgroundColor: '#fdfbf7',
          }}
        >
          {pageIdx === 0 && hasHeader && (
            <PaperHeader
              studentName={studentName}
              setStudentName={setStudentName}
              studentClass={studentClass}
              setStudentClass={setStudentClass}
              studentDate={studentDate}
              setStudentDate={setStudentDate}
            />
          )}

          <div className="flex-1 relative">
            {hasRedMargin && (
              <div
                className="absolute top-0 bottom-0 border-r-2 border-red-500/70 z-10"
                style={{ left: '20px' }}
              />
            )}

            <div className="flex flex-col">
              {pageLines.map((lineContent, lineIdx) => {
                const isEmpty = lineContent === null
                return (
                  <div
                    key={lineIdx}
                    className="relative w-full"
                    style={
                      !isEmpty && autoWrap
                        ? { minHeight: `${lineHeight}px` }
                        : { height: `${lineHeight}px`, overflow: 'hidden' }
                    }
                  >
                    <GuideLines
                      lineColorTheme={lineColorTheme}
                      shadingMode={shadingMode}
                      lineWidth={lineWidth}
                      customLineColor={customLineColor}
                      customLineColor2={customLineColor2}
                      customGuideLines={customGuideLines}
                    />
                    {!isEmpty && (
                      <div
                        className="absolute w-full pointer-events-none select-none flex items-center"
                        style={{
                          left: hasRedMargin ? '28px' : '5px',
                          width: hasRedMargin ? 'calc(100% - 36px)' : 'calc(100% - 10px)',
                          height: '100%',
                        }}
                      >
                        <span
                          style={{
                            ...getTextStyle({
                              fontFamily,
                              fontSize,
                              letterSpacing,
                              yOffset,
                              inkColor,
                              tracingMode,
                            }),
                            ...(autoWrap
                              ? { overflowWrap: 'break-word', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }
                              : {}),
                          }}
                        >
                          {lineContent}
                        </span>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-auto pt-2 border-t border-slate-100 flex justify-end items-center text-[10px] text-slate-400">
            <span>Halaman {pageIdx + 1} dari {totalPages}</span>
          </div>
        </div>
      ))}
    </section>
  )
}
