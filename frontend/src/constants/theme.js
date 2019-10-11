// shared colors

const highlight = '#f1cbff'
const highlightLightTheme = '#c0a2cc'
const white = '#FFFFFF'

const lightTheme = {
  highlight:       highlightLightTheme,
  background: white,
  title:      highlightLightTheme,
  text:       '#000000'
}
const darkTheme = {
  highlight:     highlight,
  background: '#282c35',
  title:      white,
  text:       white
}

const theme = mode => (mode === 'dark' ? darkTheme : lightTheme)
export default theme
