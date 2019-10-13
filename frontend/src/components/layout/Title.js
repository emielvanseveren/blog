import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Info from './Info'

const Container = styled.div`
  margin: 75px 0;
  transition: .15s transform ease-in-out;
  &:hover{
    transform: translateY(-3px);
  }
`

const StyledLink = styled(Link)`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.highlight};
  font-weight: 700;
`
const Description = styled.p`
  display: block;
  font-size: 0.9rem;
`

export default function Title({ date, description, read, title, postId }){
  return (
    <Container>
      <StyledLink to={{ pathname: '/' + title.replace(/\s+/g, '-').toLowerCase(), state: { postId: postId } }}>{title}</StyledLink>
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
