import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'

const InternalLink = styled(RouterLink)`
  color: ${({ theme }) => theme.highlight};
  font-size: 110%;
`
const ExternalLink = styled.a`
  text-decoration-line: underline;
  text-decoration-color: ${({ theme }) => theme.hightlight};
  color: ${({ theme }) => theme.highlight};
  font-size: 110%;
`

export default function Link({ children, to, internal = true }){
  return (
    internal ?
      <InternalLink to={to}>{children}</InternalLink> : <ExternalLink href={to} target="_blank">{children}</ExternalLink>
  )
}
Link.propTypes = {
  children: PropTypes.node.isRequired,
  internal: PropTypes.bool,
  to:       PropTypes.string.isRequired
}
