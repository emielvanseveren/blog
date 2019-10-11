import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import uuid from 'uuid/v4'

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
`

export default function Home(){
  const [titles, setTitles] = useState([{ date: undefined, description: undefined, postId: undefined, read: undefined, title: undefined }])
  const [ loading, setLoading] = useState(true)

  async function fetchData(){
    const res = await fetch(`${__API__}/post/titles`, { method: 'GET' })
    const data = await res.json()
    setTitles(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  function showTitles(){
    if (!loading){
      return (titles.map(({ date, description, postId, read, title }) => <Title date={new Date(date)} description={description} key={uuid()} postId={postId} read={read} title={title}/>))
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
