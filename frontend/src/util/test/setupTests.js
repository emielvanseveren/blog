import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import mountWithRouterAndTheme from './mountWithRouterAndTheme'

configure({
  adapter:                 new Adapter(),
  disableLifecycleMethods: false
})

global.React = React
global.mount = mount
global.mountWithRouterAndTheme = mountWithRouterAndTheme
