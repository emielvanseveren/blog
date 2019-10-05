import React from 'react'
import Routing from './components/Routing'
import { ThemeProvider } from './hooks/themeContext'

export default function App(){
  return (
    <ThemeProvider>
      <Routing/>
    </ThemeProvider>
  )
}
