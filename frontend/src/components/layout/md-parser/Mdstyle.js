import React from 'react'
import styled from 'styled-components'
import size from '../../../constants/size'

const StyledBlock = styled.div`
  margin-bottom: 40px;
  margin-top: 40px;
`
const StyledAlinea = styled.p`
  margin-bottom: 20px;
`
const StyledStrong = styled.strong`
  font-weight: 700;
  color: ${({ theme }) => theme.highlight};
`
const StyledAnchor = styled.a`
  color: ${({ theme }) => theme.highlight};
  text-decoration: ${({ theme }) => theme.highlight} underline;
`
const StyledH2 = styled.h2`
  color: ${({ theme }) => theme.text};
  font-weight: 700;
  font-size: 1.225rem;
  margin-bottom: 10px;

  @media ${size.sm}{
    font-size: 1rem;
  }
`

export const Block = ({ children }) => <StyledBlock>{children}</StyledBlock>

export const Alinea = ({ children }) => <StyledAlinea>{ children }</StyledAlinea>

export const Strong = ({ children }) => <StyledStrong>{children}</StyledStrong>

export const Anchor = ({href, children}) => <StyledAnchor href={href}target="_blank">{children}</StyledAnchor>

export const H2 = ({ children }) => <StyledH2>{children}</StyledH2>