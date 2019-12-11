import styled from 'styled-components'

// components
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter'
import { Block, Alinea, Strong, H2 } from './Mdstyle'

// code styles
import style from './codeStyle'

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
  border-radius: 5px;
  padding: 15px!important;
`
const defaultProps = {
  style: style,
  showLineNumbers: true,
}
export default {
  Js: {
    component: StyledSyntaxHighlighter,
    props: {
      language: 'javascript',
      ...defaultProps
    }
  },
  Yaml: {
    component: StyledSyntaxHighlighter,
    props: {
      language: 'yaml',
      ...defaultProps
    }
  },
  Bash: {
    component: StyledSyntaxHighlighter,
    props: {
      language: 'bash',
      ...defaultProps
    }
  },
  C: {
    component: StyledSyntaxHighlighter,
    props: {
      language: 'c',
      ...defaultProps
    }
  },
  Block: Block,
  p: Alinea,
  strong: Strong,
  h2: H2
}