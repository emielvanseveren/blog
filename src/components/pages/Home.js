import React from 'react'
import styled from 'styled-components'
import Header from '../layout/Header'

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
  transition: 0.3s background-color ease-in-out;
`

export default function Home(){
  return (
    <Background>
      <Header/>
    </Background>
  )
}
