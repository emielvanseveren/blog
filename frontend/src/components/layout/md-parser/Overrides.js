import styled from 'styled-components'

// components
import SyntaxHighlighter from 'react-syntax-highlighter'
import { Block, Alinea, Strong, Anchor, H2 } from './Mdstyle'

// code styles
import style from './codeStyle'

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
  border-radius: 5px;
  padding: 15px!important;
`

export default {
  Js: {
    component: StyledSyntaxHighlighter,
      props: {
        language: 'javascript',
        style
      }
    },
  Yaml: {
    component: StyledSyntaxHighlighter,
      props: {
        language: 'yaml',
        style
      }
    },
  Block: Block,
  p: Alinea,
  strong: Strong,
  Anchor: Anchor,
  h2: H2
}