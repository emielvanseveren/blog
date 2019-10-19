import React from 'react'
import Intro from './Intro'

describe('<Intro/>', () => {
  it('Snapshot', () => {
    expect(mountWithRouterAndTheme(
      <Intro/>
    )).toMatchSnapshot()
  })
})
