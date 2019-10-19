import React from 'react'
import styled from 'styled-components'
import size from '../../constants/size'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'

const InternalLink = styled(RouterLink)`
  color: ${({ theme }) => theme.highlight};
  font-size: 110%;
  @media ${size.sm}{
    font-size: 90%;
  }
`
const ExternalLink = styled.a`
  text-decoration-line: underline;
  text-decoration-color: ${({ theme }) => theme.hightlight};
  color: ${({ theme }) => theme.highlight};
  font-size: 110%;
  @media ${size.sm}{
    font-size: 90%;
  }
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
  to:       PropTypes.oneOfType([ PropTypes.object, PropTypes.string]).isRequired
}
