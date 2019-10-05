import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../hooks/themeContext'

import sun from '../../images/sun.png'
import moon from '../../images/moon.png'

const Switch = styled.div`
 position: relative;
 width: 45px;
 height: 25px;
 padding: 0 2px;
 cursor: pointer;
`
const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 20px;
  background-color: ${({ dark, theme }) => dark ? '#001A26' : theme.highlight};
  transition: .4s;
  &:before{
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    border-radius: 50%;
    top: 3px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    transform: ${({ dark }) => dark ? 'translateX(22px)' : 'translateX(0px)'};
    z-index: 2;
  }
`

const Sun = styled.img`
 position: absolute;
  right: 4px;
  width: 15px;
  top: 5px;
  z-index: 1;
`
const Moon = styled.img`
 position: absolute;
 left: 4px;
 top: 5px;
 width: 15px;
 z-index: 1;
`

export default function ThemeToggle(){
  const theme = useTheme()
  return (
    <Switch onClick={theme.toggleDarkMode}>`
      <Sun alt="sun" src={sun}/>
      <Moon alt="moon" src={moon}/>
      <Slider dark={theme.dark}/>
    </Switch>
  )
}
