import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import uuid from 'uuid/v4'
import size from '../../constants/size'

import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Intro from '../layout/Intro'
import Title from '../layout/Title'
import Loader from '../layout/Loader'

const Container = styled.div`
  position: relative;
  width: 800px;
  min-height: 100vh;
  margin: 0 auto;

  @media ${size.sm}{
    width: 500px;
  }
  @media ${size.xs}{
    width: 350px;
  }
`

export default function Home(){
  const [titles, setTitles] = useState({ data: null, loading: true})

  async function fetchData(){
    const res = await fetch(`/post/titles`, { method: 'GET' })
    const data = await res.json()
    setTitles({data: data, loading: false })
  }

  useEffect(() => {
    fetchData()
  }, [])

  function showTitles(){
    if (!titles.loading){
      return (titles.data.map(({ date, description, read, title }) => <Title date={new Date(date)} description={description} key={uuid()} read={read} title={title}/>))
    } else {
      return <Loader/>
    }
  }

  return (
    <Container>
      <Header/>
      <Intro/>
      {
        showTitles()
      }
      <Footer/>
    </Container>
  )
}
