import React from 'react'
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import ThemeToggle from '../logic/ThemeToggle'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Link = styled(RouterLink)`
  justify-content: center;
  width: 1200px;

`
export default function Header(){
  return (
    <Container>
      <Link to="/">BlogBlog</Link>
      <ThemeToggle/>
    </Container>
  )
}
