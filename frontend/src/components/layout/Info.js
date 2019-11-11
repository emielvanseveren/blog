import React from 'react'
import PropTypes from 'prop-types'
import size from '../../constants/size'
import styled from 'styled-components'

const Container = styled.div`
  display: block;
  font-size: 0.7rem;
  margin-bottom: 5px;

  &.post-info{
    @media ${size.sm}{
      p{
        padding-left: 10px;
      }
    }
  }
`

export default function Info({ className, date, read }){
  function parseDate(date){
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'October', 'November', 'December']
    return `${monthNames[(date.getMonth()-1)]} ${date.getDate()}, ${date.getFullYear()}`
  }
  function readLengthEmoji(read){
    switch (true){
      case (read < 5):
        return '🔥'
      case (read <= 10):
        return '🔥🔥'
      case (read <= 15):
        return '🔥🔥🔥'
      case (read <= 20):
        return '🔥🔥🔥🔥'
      default:
        return '🔥🔥🔥🔥🔥'
    }
  }
  return (
    <Container className={className}>
      <p>
        {parseDate(date)} • {read} min read {readLengthEmoji(read)}
      </p>
    </Container>
  )
}

Info.propTypes = {
  className: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  read: PropTypes.number
}
