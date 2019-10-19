import React from 'react'
import styled from 'styled-components'
import Markdown from 'markdown-to-jsx'
import size from '../../../constants/size'
import Overrides from './Overrides'

// overrides
const MarkDown = styled(Markdown)`
  display: block;
  width: 100%;
  overflow-y: auto;
  font-size: 1rem;
  @media ${size.sm}{
    font-size: 0.8rem;
  }
`

export default function MdParser({ md }){
  const overrides = {
    ...Overrides,
  }
  return (
    <MarkDown options={{ overrides: overrides}} >
      { md }
    </MarkDown>
  )
}
