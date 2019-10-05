import React from 'react'
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import ThemeToggle from '../logic/ThemeToggle'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 25px 5px 25px ;
  height: 150px;
`
const Link = styled(RouterLink)`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.title};
`
export default function Header(){
  return (
    <Container>
      <Link to="/">Maggie de blog</Link>
      <ThemeToggle/>
    </Container>
  )
}