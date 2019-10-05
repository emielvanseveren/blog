import React from 'react'
import styled from 'styled-components'

import Header from '../layout/Header'
import Intro from '../layout/Intro'
import ArticleTitle from '../layout/ArticleTitle'

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
      <ArticleTitle date="4 aug 2019" readTime="about 10 minutes" title="This is a pretty short title" to="/to-a-pretty-short-title"/>
      <ArticleTitle date="4 aug 2019" readTime="about 10 minutes" title="This is a pretty short title" to="/to-a-pretty-short-title"/>
    </Background>
  )
}
