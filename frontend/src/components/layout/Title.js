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
  margin-bottom: 5px;
`
const Description = styled.p`
  display: block;
  font-size: 0.9rem;
`

export default function Title({ date, description, read, title, postId }){
  function parseDate(date){
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'October', 'November', 'December']
    return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
  }
  function readLengthEmoji(read){
    switch (read){
      case 1,2,3:
        return '🔥'
      case 4,5,6:
        return '🔥🔥'
      case read > 6:
        return '🔥🔥🔥'
    }
  }
  return (
    <Container>
      <StyledLink to={{ pathname: '/' + title.replace(/\s+/g, '-').toLowerCase(), state: { postId } }}>{title}</StyledLink>
      <Info>{parseDate(date)} • {read} min read {readLengthEmoji(read)}</Info>
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
