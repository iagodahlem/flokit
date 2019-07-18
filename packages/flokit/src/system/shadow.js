import {
  style,
  compose,
  boxShadow,
} from 'styled-system'

export const textShadow = style({
  prop: 'textShadow',
  key: 'shadows',
})

export default compose(
  textShadow,
  boxShadow,
)
