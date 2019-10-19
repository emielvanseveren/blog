import React from 'react'
import Title from './Title'

const defaultProps = {
  date: new Date('2019/5/5'),
  description: 'This is a description',
  read: 5,
  title: 'This is the title',
  postid: 3
}

export default {
  title: <Title {...defaultProps} />
}