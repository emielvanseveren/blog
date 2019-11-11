import React from 'react'
import PropTypes from 'prop-types'
import size from '../../constants/size'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Info from './Info'

const Container = styled.div`
  margin: 75px 0;
  width: 100%;
  transition: .15s transform ease-in-out;
  &:hover{
    transform: translateY(-3px);
  }
  @media ${size.xs}{
    margin: 50px auto 50px auto;
    width: 95%;
  }
`

const StyledLink = styled(Link)`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.highlight};
  font-weight: 700;
  @media ${size.sm}{
    font-size: 1.5rem;
  }
  @media ${size.xs}{
    font-size: 1.3rem;
  }
`
const Description = styled.p`
  display: block;
  font-size: 0.9rem;

  @media ${size.xs}{
    font-size: 0.8rem;
  }
`

export default function Title({ date, description, read, title, postId }){

  //put postId in localstorage
  localStorage.setItem('post', JSON.stringify({ postId }))


  return (
    <Container>
      <StyledLink to={{ pathname: '/' + title.replace(/\s+/g, '-').toLowerCase()}}>{title}</StyledLink>
      <Info date={date} read={read}/>
      <Description>{description}</Description>
    </Container>
  )
}
Title.propTypes = {
  date:         PropTypes.instanceOf(Date),
  description:  PropTypes.string.isRequired,
  postId:       PropTypes.number.isRequired,
  read:         PropTypes.number.isRequired,
  title:        PropTypes.string.isRequired
}
