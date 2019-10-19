import React from 'react'
import Footer from './Footer'
import expectExport from 'expect'

describe('<Footer/>', () => {
  it('Snapshot', () => {
    expect(mountWithRouterAndTheme(
      <Footer/>
    )).toMatchSnapshot()
  })
})
