import React from 'react'
import App from './App'

// should add theme provider as this is created in a parent component
describe('<App/>', () => {
  it('Snapshot', () => {
    expect(mountWithRouterAndTheme(
      createComponent()
    )).toMatchSnapshot()
  })
})

function createComponent(props){
  const defaultprops = {}
  return <App {...defaultprops} {...props}/>
}
