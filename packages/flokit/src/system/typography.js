import {
  style,
  compose,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  textAlign,
  fontStyle,
} from 'styled-system'

const textTransform = style({
  prop: 'textTransform',
})

export default compose(
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  fontStyle,
  textAlign,
  textTransform
)
