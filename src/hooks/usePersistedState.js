'use client'

import { useState, useEffect } from 'react'

const PREFIX = 'latin_'

export default function usePersistedState(key, defaultValue) {
  const [state, setState] = useState(defaultValue)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(PREFIX + key)
      if (saved !== null) {
        setState(JSON.parse(saved))
      }
    } catch {}
  }, [key])

  useEffect(() => {
    try {
      localStorage.setItem(PREFIX + key, JSON.stringify(state))
    } catch {}
  }, [key, state])

  return [state, setState]
}
