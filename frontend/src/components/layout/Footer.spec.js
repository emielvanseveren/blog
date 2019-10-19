import React from 'react'
import Footer from './Footer'

describe('<Footer/>', () => {
  it('Snapshot', () => {
    expect(mountWithRouterAndTheme(
      <Footer/>
    )).toMatchSnapshot()
  })
})
