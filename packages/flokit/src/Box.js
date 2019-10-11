import styled from 'styled-components'
import { compose } from 'styled-system'
import { position, layout, space, background, border, shadow, color, flexItem } from './system'

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
    flexItem
  )}
`

Box.propTypes = {
  ...position.propTypes,
  ...layout.propTypes,
  ...space.propTypes,
  ...background.propTypes,
  ...border.propTypes,
  ...shadow.propTypes,
  ...color.propTypes,
  ...flexItem.propTypes,
}

export default Box
