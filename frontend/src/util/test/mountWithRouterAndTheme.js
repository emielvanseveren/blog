import React from 'react'
import PropTypes from 'prop-types'
import history from '../../constants/history'
import { ThemeProvider } from '../../hooks/themeContext'
import { Router } from 'react-router-dom'
import { mount } from 'enzyme'

export default function mountWithRouterAndTheme(ui){
  const Wrapper = ({ children }) => (
    <Router history={history}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </Router>
  )
  Wrapper.propTypes = {
    children: PropTypes.node
  }
  return (
    mount(ui,{ wrappingComponent: Wrapper })
  )
}
