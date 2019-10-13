import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from '../Link'

const Container = styled.div`
  width: 800px;
  border-radius: 10px;
  color: ${({ theme }) => theme.text};

  div {
    margin-bottom: 20px;
  }
  strong {
    font-weight: 600;
    margin-left: 2px;
    font-size: 105%;
    margin-right: 2px;
    color: ${({ theme }) => theme.highlight};
  }
  a {
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.highlight};
    color: ${({ theme }) => theme.highlight};
    font-size: 110%;
  }
`

export default function Body({ text }){
  return (
    <Container dangerouslySetInnerHTML={{ __html: text }}/>
  )
}

Body.propTypes = {
  text: PropTypes.string.isRequired
}
