import React from 'react'
import { Helmet } from 'react-helmet'
import Routing from './components/Routing'
import { ThemeProvider } from './hooks/themeContext'
import Style from './constants/globalStyle'

export default function App(){
  return (
    <ThemeProvider>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>React Addict</title>
        <link rel="canonical" href="https://blog.emielvanseveren.be"/>
        <meta name="description" content="Personal Blog - Emiel Van Severen - React Addict"/>
        <meta name="keywords" content="Blog, Emiel Van Severen, Personal Blog, Programmer"/>
        <meta name="HandHeldFriendly" content="true"/>
        <meta name="theme-color" content="#f1cbff"/>
      </Helmet>
      <Style/>
      <Routing/>
    </ThemeProvider>
  )
}
