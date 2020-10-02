import { useEffect, useState } from 'react'

export const useTheme = () => {
  const [mode, setMode] = useState('light')

  const setTheme = (theme) => {
    window.localStorage.setItem('theme', theme)
    setMode(theme)
  }

  const toggleMode = () => {
    mode === 'light' ? setTheme('dark') : setTheme('light')
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    localTheme && setTheme(localTheme)
  }, [])

  return [mode, toggleMode]
}
