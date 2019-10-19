import React from 'react'
import App from './App'
import { themeProvider } from './hooks/themeContext'
import theme from './constants/theme'

// should add theme provider as this is created in a parent component
describe('App', () => {
  it('renders correctly', () => {
    expect(mountWithRouter(
      <ThemeProvider theme={theme}>
        {createComponent()}
      </ThemeProvider>
    )).toMatchSnapshot()
  })
})

function createComponent(props){
  const defaultprops = {}
  return <App {...defaultprops} {...props}/>
}
