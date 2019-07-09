import styled from 'styled-components'
import {
  position,
  layout,
  space,
  background,
  border,
  shadow,
  color,
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  justifySelf,
  alignSelf,
  order,
  compose,
} from 'styled-system'
import propTypes from '@styled-system/prop-types'

const Box = styled.div`
  box-sizing: border-box;
  min-width: 0;

  ${compose(
    position,
    layout,
    space,
    background,
    border,
    shadow,
    color,
    flex,
    flexGrow,
    flexShrink,
    flexBasis,
    justifySelf,
    alignSelf,
    order,
  )}
`

Box.propTypes = {
  ...propTypes.position,
  ...propTypes.layout,
  ...propTypes.space,
  ...propTypes.background,
  ...propTypes.border,
  ...propTypes.shadow,
  ...propTypes.color,
  flex: propTypes.flexbox.flex,
  flexGrow: propTypes.flexbox.flexGrow,
  flexShrink: propTypes.flexbox.flexShrink,
  flexBasis: propTypes.flexbox.flexBasis,
  justifySelf: propTypes.flexbox.justifySelf,
  alignSelf: propTypes.flexbox.alignSelf,
  order: propTypes.flexbox.order,
}

export default Box
