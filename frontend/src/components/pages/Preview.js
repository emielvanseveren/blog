import React, { useState } from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import MarkdownParser from '../layout/md-parser/MdParser'

import Header from '../layout/Header'


const Container = styled.div`
  position: relative;
  width: 800px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 80vh;
  background-color: ${({ theme }) => theme.background};
  border: none;
  resize: none;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 1rem;
`
const ShowPreviewButton = styled.button`
  background-color: ${({ theme }) => darken(0.05,theme.background) };
  color: ${({theme }) => theme.text };
  padding: 5px 15px;
  margin: 0 auto;
  text-align: center;
  outline: 0;
  margin-bottom: 15px;
  font-size: 110%;
  font-weight: 600;
  border-radius: 5px;
`

export default function Preview(){
  const [preview, setPreview] = useState(false)
  const [md, changeMd] = useState('')

  function handleChange(e){
    changeMd(e.target.value)
  }
  function handlePreviewClick(){
    setPreview(!preview)
  }
  return (
    <Container>
      <Header/>
      <ShowPreviewButton onClick={handlePreviewClick}>{ preview ? 'Preview ON' : 'Preview OFF'}</ShowPreviewButton>
        {
          preview ? <MarkdownParser md={md} /> :
        <TextArea id="md" onChange={handleChange} value={md} />
        }
    </Container>
 )
}
