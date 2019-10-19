import React from 'react'
import { Helmet } from 'react-helmet'
import Routing from './components/Routing'
import { ThemeProvider } from './hooks/themeContext'
import Style from './constants/globalStyle'
import history from './constants/history'

export default function App(){
  return (
    <ThemeProvider>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>Maggie de blog</title>
        <link rel="canonical" href="https://blog.emielvanseveren.be"/>
        <link rel="stylesheet" href="https://highlightjs.org/static/demo/styles/railscasts.css" />
        <meta name="description" content="Personal Blog - Emiel Van Severen - Maggie de blog - React Addict"/>
        <meta name="keywords" content="Blog, Emiel Van Severen, Personal Blog, Programmer"/>
        <meta name="HandHeldFriendly" content="true"/>
        <meta name="theme-color" content="#f1cbff"/>
      </Helmet>
      <Style/>
      <Routing history={history}/>
    </ThemeProvider>
  )
}
