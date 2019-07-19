const colors = {
  black: '#010101',
  white: '#e5e5e5',
  gray: '#999998',
}

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

const fonts = {
  body: 'Montserrat, sans-serif',
}

const fontSizes = [0, 5, 7, 9, 12, 16, 21, 28, 37, 50, 67, 89, 119, 159].map(n => `${n / 10}rem`)

const fontWeights = [0, 300, 400, 500, 600, 700]

const buttons = {
  primary: {
    color: colors.white,
    backgroundColor: 'transparent',
    borderColor: colors.white,
  },
  tertiary: {
    color: colors.white,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
}

const theme = {
  colors,
  space,
  fonts,
  fontSizes,
  fontWeights,
  buttons,
}

export default theme
