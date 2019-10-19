import React from 'react'
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import size from '../../constants/size'
import ThemeToggle from '../logic/ThemeToggle'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 50px;
  height: 150px;

  @media ${size.md}{
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
  @media ${size.sm}{
    flex-direction: column;
    justify-content: flex-start;
    padding: 25px 0;
    height: 100px;
  }
`
const Link = styled(RouterLink)`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.title};

  @media ${size.sm}{
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
`
export default function Header(){
  return (
    <Container>
      <Link to="/">Maggie de blog</Link>
      <ThemeToggle/>
    </Container>
  )
}
