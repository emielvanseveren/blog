import React from 'react'
import Header from './Footer'

describe('<Header/>', () => {
  it('Snapshot', () => {
    expect(mountWithRouterAndTheme(
      <Header/>
    )).toMatchSnapshot()
  })
})
