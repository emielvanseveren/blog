import React from 'react'
import styled from 'styled-components'
import history from '../../constants/history'
import Header from '../layout/Header'
import Intro from '../layout/Intro'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
`

export default function(){
  // hierop fetchen api.massief.biz:port
  console.log(history.location.state.articleNumber)
  return (
    <Container>
      <Header/>
      <Intro/>
      this is an article
    </Container>
  )
}
