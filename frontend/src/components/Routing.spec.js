import React from 'react'
import Router from './Routing'
import history from '../constants/history'

describe('<Info/>', () => {
  it('Snapshot', () => {
    expect(mount(
      createComponent()
    )).toMatchSnapshot()
  })
})

function createComponent(props){
  const defaultProps = {
    history: history
  }
  return <Router { ...props } { ...defaultProps}/>
}
