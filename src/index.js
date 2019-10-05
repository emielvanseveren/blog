import React from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'


import App from './App'

render(
  <ThemeProvider>
  <App/>
  </ThemeProvider>,
  document.getElementById('root'))