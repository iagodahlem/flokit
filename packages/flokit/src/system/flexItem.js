import {
  style,
  compose,
  flex,
  flexBasis,
  justifySelf,
  alignSelf,
  order,
} from 'styled-system'

export const flexGrow = style({
  prop: 'flexGrow',
})

export const flexShrink = style({
  prop: 'flexShrink',
})

export default compose(
  flex,
  flexBasis,
  flexGrow,
  flexShrink,
  justifySelf,
  alignSelf,
  order,
)
