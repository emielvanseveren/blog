import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import history from '../../constants/history'
import Header from '../layout/Header'
import Loader from '../layout/Loader'
import Post from '../layout/post'

const Container = styled.div`
  width: 800px;
  min-height: 100vh;
  margin: 0 auto;
`

export default function PostPage(){
  const [ postData, setPostData] = useState({ date: undefined, description: undefined, postid: undefined, read: undefined, title: undefined, body: undefined, loading: true })

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData(){
    const res = await fetch(`${__API__}/post/${history.location.state.postId}`, { method: 'GET' })
    const data = await res.json()
    console.log(data)
    setPostData({ ...data, loading: false })
  }
  function loadPost(){
    return (
      <Post {...postData}/>
    )
  }

  return (
    <Container>
      <Header/>
      {
        postData.loading ? <Loader/> : loadPost()

      }
    </Container>
  )
}
