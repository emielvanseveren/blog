// shared colors

const purple = '#7F3E99'
const white = '#FFFFFF'

const lightTheme = {
  purple:       purple,
  background: white,
  title:      purple,
  text:       '#000000'
}
const darkTheme = {
  purple:     purple,
  background: '#282C35',
  title:      white,
  text:       white
}

const theme = mode => (mode === 'dark' ? darkTheme : lightTheme)
export default theme
