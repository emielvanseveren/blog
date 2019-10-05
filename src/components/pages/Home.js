import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../hooks/themeContext'

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
`

export default function Home(){
  const themeState = useTheme()
  return (
    <Background>
      <button onClick={themeState.toggleDarkMode}>toggledarkmode</button>
    </Background>
  )
}
