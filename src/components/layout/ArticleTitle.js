import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.purple};
`

export default function ArticleTitle({ title, to }){
  return (
    <StyledLink to={to}>{title}</StyledLink>
  )
}
ArticleTitle.propTypes = {
  title: PropTypes.string.isRequired,
  to:    PropTypes.string.isRequired
}
