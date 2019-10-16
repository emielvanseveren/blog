import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Title from './Title'
import MdParser from '../md-parser/MdParser'

const Container = styled.div`
  position: relative;
  width: 800px;
  margin: 0 auto 100px auto;
`

export default function Post({ body, date, read, title, postId }){
  return (
    <Container>
      <Title date={new Date(date)} read={read} text={title}/>
      <MdParser md={body}/>
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
