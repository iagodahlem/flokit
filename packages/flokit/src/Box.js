import styled from 'styled-components'
import {
  position,
  layout,
  space,
  background,
  border,
  shadow,
  typography,
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
    typography,
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

  ...propTypes.typography,

  ...propTypes.color,

  ...propTypes.flexbox.flex,
  ...propTypes.flexbox.flexGrow,
  ...propTypes.flexbox.flexShrink,
  ...propTypes.flexbox.flexBasis,
  ...propTypes.flexbox.justifySelf,
  ...propTypes.flexbox.alignSelf,
  ...propTypes.flexbox.order,
}

export default Box
