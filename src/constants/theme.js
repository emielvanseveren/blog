// shared colors

const lightTheme = {
  background: '#FFFFFF'
}
const darkTheme = {
  background: '#282C35'
}

const theme = mode => (mode === 'dark' ? darkTheme : lightTheme)
export default theme
