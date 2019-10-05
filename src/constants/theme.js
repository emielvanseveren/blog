// shared colors

const highlight = '#7CD8BF'
const white = '#FFFFFF'

const lightTheme = {
  highlight:       highlight,
  background: white,
  title:      highlight,
  text:       '#000000'
}
const darkTheme = {
  highlight:     highlight,
  background: '#282C35',
  title:      white,
  text:       white
}

const theme = mode => (mode === 'dark' ? darkTheme : lightTheme)
export default theme
