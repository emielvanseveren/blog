import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './hooks/themeContext'
import { CosmosGlobalStyle } from './constants/globalStyle'

const decorator = ({ children }) => (
  <ThemeProvider>
    <CosmosGlobalStyle>
      <Router>
        { children }
      </Router>
    </CosmosGlobalStyle>
  </ThemeProvider>
)

decorator.propTypes = {
  children: PropTypes.node.isRequired
}

export default decorator
