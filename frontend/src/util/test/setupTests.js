import React from 'react'
import mountWithRouter from './src/utils/test/mountWithRouter'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({
  adapter:                 new Adapter(),
  disableLifecycleMethods: false
})

global.React = React
global.mount = mount
global.mountWithRouter = mountWithRouter