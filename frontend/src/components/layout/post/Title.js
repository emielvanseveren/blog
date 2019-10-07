import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  width: 600px;
  margin: 0 auto 50px auto;
`

const StyledTitle = styled.h2`
  margin-top: 50px;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.text};
  font-weight: 700;
  text-align: ${({ center }) => center ? 'center' : 'left'};
  text-transform: capitalize;
`
const Description = styled.div`
  text-align: center;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.highlight};
  font-weight: 600;
`
export default function Title({ center = false, text, date, readTime }){
  return (
    <Container>
      <StyledTitle center={center}>{ text }</StyledTitle>
      <Description>{ date } • { readTime }</Description>
    </Container>
  )
}

Title.propTypes = {
  center:   PropTypes.bool,
  date:     PropTypes.string.isRequired,
  readTime: PropTypes.string.isRequired,
  text:     PropTypes.string.isRequired
}
