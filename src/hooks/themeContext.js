import React, { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import theme from '../constants/theme'

const defaultContextData = {
  darkmode:          false,
  toggleDarkMode: () => {}
}

const ThemeContext = createContext(defaultContextData)
const useTheme = () => useContext(ThemeContext)

const useEffectDarkMode = () => {
  const [themeState, setThemeState] = useState({
    dark:            true,
    hasThemeMounted: false
  })

  useEffect(() => {
    const lsDark = localStorage.getItem('dark') === 'true'
    setThemeState({ ...themeState, dark: lsDark, hasThemeMounted: true })
  }, [])
  return [themeState, setThemeState]
}

const ThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useEffectDarkMode()

  if (!themeState.hasThemeMounted) {
    return <div/>
  }
  const toggleDarkMode = () => {
    const dark = !themeState.dark
    setThemeState({ ...themeState, dark })
    localStorage.setItem('dark', JSON.stringify(dark))
  }
  const computedTheme = themeState.dark ? theme('dark') : theme('light')

  return (
    <StyledThemeProvider theme={computedTheme}>
      <ThemeContext.Provider
        value={{
          dark: themeState.dark,
          toggleDarkMode
        }}>
        {children}
      </ThemeContext.Provider>
    </StyledThemeProvider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export { ThemeProvider, useTheme }
