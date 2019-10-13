import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Info from '../Info'

const Container = styled.div`
  width: 800px;
  margin: 0 auto 50px auto;
`

const StyledTitle = styled.h2`
  margin-top: 50px;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.text};
  font-weight: 800;
  text-align: ${({ center }) => center ? 'center' : 'left'};
  text-transform: capitalize;
`
export default function Title({ center = false, text, date, read }){
  return (
    <Container>
      <StyledTitle center={center}>{ text }</StyledTitle>
      <Info date={date} read={read}/>
    </Container>
  )
}

Title.propTypes = {
  center:   PropTypes.bool,
  date:     PropTypes.instanceOf(Date),
  read:     PropTypes.number.isRequired,
  text:     PropTypes.string.isRequired
}
