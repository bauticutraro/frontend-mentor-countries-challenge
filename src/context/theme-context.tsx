import { ReactNode, createContext, useEffect, useState } from 'react'
import { THEMES } from '../constants'

type ValueOf<T> = T[keyof T]
type ThemesTypes = ValueOf<typeof THEMES>

type Props = {
  children: ReactNode
}

type ContextObject = {
  theme: ThemesTypes
  toggleTheme: () => void
}

const ThemeContext = createContext<ContextObject>({ theme: 'light', toggleTheme: () => null })

const ThemeContextProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<ThemesTypes>(
    (localStorage.getItem('theme') as ThemesTypes) || THEMES.LIGHT
  )

  const toggleTheme = () => setTheme(prevState => (prevState === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT))
  useEffect(() => {
    if (theme) {
      document.body.className = theme === THEMES.DARK ? 'theme-dark' : ''
      localStorage.setItem('theme', theme)
    }
  }, [theme])

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export { ThemeContextProvider, ThemeContext }
