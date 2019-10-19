import React from 'react'
import MdParser from './MdParser'

const md = 'this is a very very very very long md text **not**'

export default {
  parser: <MdParser md={md} />
}