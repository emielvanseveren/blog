import React from 'react'
import PropTypes from 'prop-types'
import history from '../../constants/history'
import { Router } from 'react-router-dom'
import { mount } from 'enzyme'

export default function mountWithRouter(ui){
  const Wrapper = ({ children }) => (
    <Router history={history}>{children}</Router>
  )
  Wrapper.propTypes = {
    children: PropTypes.node
  }
  return (
    mount(ui,{ wrappingComponent: Wrapper })
  )
}
