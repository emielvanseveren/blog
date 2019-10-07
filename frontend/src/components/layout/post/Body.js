import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

const Container = styled.div`
  width: 800px;
  padding: 50px;
  background-color: ${({ theme }) => darken(0.05, theme.background)};
  border-radius: 25px;
`

export default function Body(){
  return (
    <Container>
      this is the body but this will be very very very long when the time is there.
    </Container>
  )
}
