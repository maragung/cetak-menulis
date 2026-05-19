const makeTwoColor = (c1, c2) => [c1, c2, c2, c2, c2, c1]

const THEME_COLORS = {
  classic: makeTwoColor('rgba(239, 68, 68, 0.6)', 'rgba(2, 132, 199, 0.8)'),
  blue: makeTwoColor('rgba(2, 132, 199, 0.8)', 'rgba(14, 165, 233, 0.5)'),
  gray: makeTwoColor('rgba(107, 114, 128, 0.6)', 'rgba(156, 163, 175, 0.4)'),
  purple: makeTwoColor('rgba(147, 51, 234, 0.7)', 'rgba(168, 85, 247, 0.4)'),
  green: makeTwoColor('rgba(22, 163, 74, 0.7)', 'rgba(34, 197, 94, 0.4)'),
  orange: makeTwoColor('rgba(234, 88, 12, 0.7)', 'rgba(249, 115, 22, 0.4)'),
  rainbow: makeTwoColor('rgba(239, 68, 68, 0.6)', 'rgba(14, 165, 233, 0.6)'),
  sepia: makeTwoColor('rgba(160, 110, 70, 0.8)', 'rgba(210, 170, 120, 0.5)'),
}

const SHADING_CLASSES = {
  classic: 'bg-sky-100/40',
  gray: 'bg-gray-100/60',
  none: 'bg-transparent',
}

export default function GuideLines({
  lineColorTheme,
  shadingMode,
  lineWidth,
  customLineColor,
  customLineColor2,
  customGuideLines,
}) {
  const lineColors =
    lineColorTheme === 'custom'
      ? makeTwoColor(customLineColor, customLineColor2)
      : THEME_COLORS[lineColorTheme] || THEME_COLORS.classic

  const activeShadingClass = SHADING_CLASSES[shadingMode] || SHADING_CLASSES.none
  const guides = customGuideLines || []

  return (
    <div className="absolute inset-0 pointer-events-none select-none">
      <div
        className={`absolute w-full ${activeShadingClass}`}
        style={{ top: '40%', height: '20%' }}
      />
      {guides.map((g) => (
        <div
          key={g.id}
          className="absolute left-0 right-0"
          style={{
            top: `${g.position}%`,
            borderTop: '1px dashed rgba(0,0,0,0.15)',
            transform: `translateY(${g.offset || 0}px)`,
          }}
        />
      ))}
      {[0, 1, 2, 3, 4, 5].map((idx) => (
        <div
          key={idx}
          className="absolute left-0 right-0"
          style={{
            top: `${idx * 20}%`,
            borderBottomWidth: `${lineWidth}px`,
            borderBottomStyle: 'solid',
            borderBottomColor: lineColors[idx],
          }}
        />
      ))}
    </div>
  )
}
