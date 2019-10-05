import React from 'react'
import styled from 'styled-components'
import Link from './Link'

import me from '../../images/me.jpg'

const Container = styled.aside`
  width: 100%;
  padding-left: 25px;
  display: flex;
  align-items: top;
`
const CircleImg = styled.img`
  display: inline-block;
  width: 75px;
  height: 75px;
  border-radius: 50%;
`
const TextContainer = styled.div`
  margin-left: 25px;
  height: 100%;
  display: inline-flex;
  justify-content: center;
  flex-direction: column;
  h1{
    font-size: 1.2rem;
  }
`

export default function Intro(){
  return (
    <Container>
      <CircleImg alt="circle image Emiel Van Severen" src={me}/>
      <TextContainer>
        <h1>Emiel Van Severen</h1>
        <p>If you can´t explain it simply, you don´t understand it well enough.</p>
        <Link internal={false} to="https://github.com/emielvanseveren">github.com/emielvanseveren</Link>
      </TextContainer>
    </Container>
  )
}
