import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Title from './Title'
import Body from './Body'
import Footer from '../Footer'

const Container = styled.div`
  position: relative;
  width: 800px;
  min-height: 100vh;
  margin: 0 auto;
`

export default function Post({ body, date, read, title }){
  return (
    <Container>
      <Title date={new Date(date)} read={read} text={title}/>
      <Body text={body}/>
      <Footer/>
    </Container>
  )
}

Post.propTypes = {
  body:         PropTypes.string.isRequired,
  date:         PropTypes.string.isRequired,
  description:  PropTypes.string.isRequired,
  postId:       PropTypes.number,
  read:         PropTypes.number,
  title:        PropTypes.string
}
