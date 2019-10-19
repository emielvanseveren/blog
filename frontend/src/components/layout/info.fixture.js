import React from 'react'
import Info from './Info'

const defaultProps = {
  date: new Date('2019/05/05'),
  read: 5
}

export default {
  info: <Info {...defaultProps}/>,
  infoPost: <Info className="post" {...defaultProps} />
}