import React from 'react'
import styled from 'styled-components'

import Link from './Link'

const Container = styled.footer`
  display: flex;
  position: absolute;
  align-items: center;
  bottom: 0;
  height: 50px;
  width: 100%;
  margin-top: 50px;
  a{
    margin-left: 8px;
    margin-right: 8px;
    font-size: 90%;
  }
`

export default function Footer(){
  return (
    <Container>
      <Link internal={false} to="https://www.github.com/emielvanseveren/">github</Link>
      •
      <Link internal={false} to="https://emielvanseveren.be">portfolio</Link>
      •
      <Link internal={false} to="https://massief.biz">massief.biz</Link>
    </Container>
  )
}
