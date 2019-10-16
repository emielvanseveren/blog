import React, { useState } from 'react'
import styled from 'styled-components'
import Markdown from 'markdown-to-jsx'

import Header from '../layout/Header'


const Container = styled.div`
  position: relative;
  width: 800px;
  min-height: 100vh;
  margin: 0 auto;
`
const TextArea = styled.textarea`
  width: 50%;
  height: 1000px;
  background-color: rgba(0,0,0,0.5);
  border: none;
  resize: none;
  border-radius: 5px;
`
const MarkDownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default function Preview(){
  const [md, changeMd] = useState('nothing')
  console.log('this loaded')

  function handleChange(e){
    changeMd(e.target.value)
  }
  return (
    <Container>
      <Header/>
      <MarkDownContainer>
        <TextArea id="md" onChange={handleChange} value={md} />
        <Markdown>{md}</Markdown>
      </MarkDownContainer>
    </Container>
 )
}
