import styled from 'styled-components'

// components
import SyntaxHighlighter from 'react-syntax-highlighter'
import { Block, Alinea, Strong, Anchor, H2 } from './Mdstyle'

// code styles

import javascriptStyle from 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-cave-dark'
import yamlStyle from 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-cave-light'

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
  border-radius: 5px;
  padding: 15px!important;
`

export default {
  Js: {
    component: StyledSyntaxHighlighter,
      props: {
        language: 'javascript',
        style: javascriptStyle
      }
    },
  Yaml: {
    component: StyledSyntaxHighlighter,
      props: {
        language: 'yaml',
        style: yamlStyle
      }
    },
  Block: Block,
  p: Alinea,
  strong: Strong,
  Anchor: Anchor,
  h2: H2
}