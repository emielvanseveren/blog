import React from 'react'
import Routing from './components/Routing'
import { ThemeProvider } from './hooks/themeContext'
import Style from './constants/globalStyle'

export default function App(){
  return (
    <ThemeProvider>
      <Style/>
      <Routing/>
    </ThemeProvider>
  )
}
