import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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
const Info = styled.div`
  display: block;
  font-size: 0.7rem;
`

export default function Title({ date, readTime, title, index }){
  return (
    <Container>
      <StyledLink to={{ pathname: '/' + title.replace(/\s+/g, '-').toLowerCase(), state: { articleNumber: index } }}>{title}</StyledLink>
      <Info>{date} • {readTime}</Info>
    </Container>
  )
}
Title.propTypes = {
  date:     PropTypes.string.isRequired,
  index:    PropTypes.number.isRequired,
  readTime: PropTypes.string.isRequired,
  title:    PropTypes.string.isRequired,
  to:       PropTypes.string.isRequired
}
