import React from 'react'
import Routing from './components/Routing'
import { ThemeProvider } from 'styled-components'
import theme from './constants/theme'

export default function App(){
  return (
    <ThemeProvider theme={theme}>
      <Routing/>
    </ThemeProvider>
  )
}