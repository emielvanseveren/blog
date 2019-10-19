import React from 'react'
import Info from './Info'

describe('<Info/>', () => {
  it('Snapshot', () => {
    expect(mountWithRouterAndTheme(
      createComponent()
    )).toMatchSnapshot()
  })
})

function createComponent(props){
  const defaultProps = {
    date: new Date('10/10/2019'),
    read: 5
  }
  return <Info { ...props } { ...defaultProps}/>
}
