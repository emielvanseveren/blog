import React from 'react'
import styled from 'styled-components'
import Markdown from 'markdown-to-jsx'

import Overrides from './Overrides'
import { Block, Alinea } from './Mdstyle'

// overrides
const MarkDown = styled(Markdown)`
  display: block;
  width: 100%;
  height: 80vh;
  overflow-y: auto;
  font-size: 1rem;

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
