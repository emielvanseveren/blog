import React from 'react'
import styled from 'styled-components'
import loader from '../../images/loader.svg'

const StyledLoader = styled.img`
  width: 30px;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
`

export default function Loader(){
  return (
    <StyledLoader alt="loader-icon" src={loader}/>
  )
}
