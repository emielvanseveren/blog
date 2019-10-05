import React from 'react'
import styled from 'styled-components'
import ThemeToggle from '../../components/logic/ThemeToggle'

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
`

export default function Home(){
  return (
    <Background>
      <ThemeToggle/>
    </Background>
  )
}
