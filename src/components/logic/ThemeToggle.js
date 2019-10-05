import React, { useState } from 'react'
import styled from 'styled-components'
import { useTheme } from '../../hooks/themeContext'

const Switch = styled.div`
 position: relative;
 width: 60px;
 height: 34px;
`
const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #cccccc;
  transition: .4s;
  &:before{
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    transform: ${({ dark }) => dark ? 'translateX(26px)' : 'translateX(0px)'};
  }
`

export default function ThemeToggle(){
  const theme = useTheme()
  return (
    <Switch>
      <Slider dark={theme.dark} onClick={theme.toggleDarkMode}/>
    </Switch>
  )
}
