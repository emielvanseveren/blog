import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  display: block;
  font-size: 0.7rem;
  margin-bottom: 5px;
`

export default function Info({ date, read }){
  function parseDate(date){
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'October', 'November', 'December']
    return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
  }
  function readLengthEmoji(read){
    switch (read){
      case 1: case 2: case 3:
        return '🔥'
      case 4: case 5: case 6:
        return '🔥🔥'
      case read > 6:
        return '🔥🔥🔥'
    }
  }
  return (
    <Container>
      {parseDate(date)} • {read} min read {readLengthEmoji(read)}
    </Container>
  )
}

Info.propTypes = {
  date: PropTypes.instanceOf(Date),
  read: PropTypes.number
}
