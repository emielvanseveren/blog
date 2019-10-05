import React from 'react'
import styled from 'styled-components'

import Header from '../layout/Header'
import Intro from '../layout/Intro'
import ArticleTitle from '../layout/ArticleTitle'

const Container = styled.div`
  width: 800px;
  min-height: 100vh;
  margin: 0 auto;
`

export default function Home(){
  return (
    <Container>
      <Header/>
      <Intro/>
      <ArticleTitle date="4 aug 2019" index={5} readTime="about 10 minutes" title="This is a pretty short title" to="/article/thisisthetitle"/>
      <ArticleTitle date="4 aug 2019" index={6} readTime="about 10 minutes" title="This is a pretty short title" to="/article/thisisanothertitle"/>
    </Container>
  )
}
