import React from 'react'
import styled from 'styled-components'
import size from '../../constants/size'
import Link from './Link'

const Container = styled.footer`
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  margin-top: 50px;
  a{
    margin-left: 8px;
    margin-right: 8px;
    font-size: 90%;
  }
  @media ${size.xs}{
    justify-content: center;
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
