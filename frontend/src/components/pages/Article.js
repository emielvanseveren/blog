import React from 'react'
import styled from 'styled-components'
import history from '../../constants/history'
import Header from '../layout/Header'
import Title from '../layout/post/Title'
import Body from '../layout/post/Body'

const Container = styled.div`
  width: 800px;
  min-height: 100vh;
  margin: 0 auto;
`

export default function(){
  // hierop fetchen api.massief.biz:port
  console.log(history.location.state.articleNumber)
  return (
    <Container>
      <Header/>
      <Title center text="this is the title" date="6 oct 2019" readTime="8min"/>
      <Body/>
    </Container>
  )
}
