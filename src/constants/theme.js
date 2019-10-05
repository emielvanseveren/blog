// shared colors

const lightTheme = {
  background: '#FFFFFF',
  title:      '#B447CC',
  text:       '#000000'
}
const darkTheme = {
  background: '#282C35',
  title:      '#FFFFFF',
  text:       '#FFFFFF'
}

const theme = mode => (mode === 'dark' ? darkTheme : lightTheme)
export default theme
