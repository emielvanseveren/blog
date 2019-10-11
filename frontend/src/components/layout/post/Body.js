import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { darken } from 'polished'

const Container = styled.div`
  width: 800px;
  padding: 50px;
  background-color: ${({ theme }) => darken(0.05, theme.background)};
  border-radius: 25px;
  color: ${({ theme }) => theme.text};
`

export default function Body({ children }){
  return (
    <Container>
      { children }
    </Container>
  )
}

Body.propTypes = {
  children: PropTypes.node.isRequired
}
