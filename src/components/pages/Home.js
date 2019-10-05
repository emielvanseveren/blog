import React from 'react'
import styled from 'styled-components'

import Header from '../layout/Header'
import Intro from '../layout/Intro'

const Background = styled.div`
  width: 800px;
  height: 100vh;
  margin: 0 auto;
  transition: 0.3s background-color ease-in-out;
`

export default function Home(){
  return (
    <Background>
      <Header/>
      <Intro/>
    </Background>
  )
}
