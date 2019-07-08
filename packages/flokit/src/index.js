import styled from 'styled-components'
import {
  style,
  getWidth,

  position,
  zIndex,
  top,
  right,
  bottom,
  left,
  display,
  width,
  size,
  space,
  fontSize,
  color,
  flex,
  justifySelf,
  alignSelf,
  order,

  alignItems,
  alignContent,
  justifyContent,
  flexWrap,
  flexBasis,
  flexDirection,

  fontFamily,
  textAlign,
  lineHeight,
  fontWeight,
  letterSpacing,
} from 'styled-system'

const height = style({
  prop: 'height',
  key: 'heights',
  transformValue: getWidth,
})

export const Box = styled.div`
  box-sizing: border-box;

  ${position}
  ${zIndex}
  ${top}
  ${right}
  ${bottom}
  ${left}

  ${display}
  ${width}
  ${height}
  ${size}
  ${space}

  ${fontSize}

  ${color}

  ${flex}
  ${justifySelf}
  ${alignSelf}
  ${order}
`

Box.propTypes = {
  ...position.propTypes,
  ...zIndex.propTypes,
  ...top.propTypes,
  ...right.propTypes,
  ...bottom.propTypes,
  ...left.propTypes,

  ...display.propTypes,
  ...width.propTypes,
  ...height.propTypes,
  ...size.propTypes,
  ...space.propTypes,

  ...fontSize.propTypes,

  ...color.propTypes,

  ...flex.propTypes,
  ...justifySelf.propTypes,
  ...alignSelf.propTypes,
  ...order.propTypes,
}

export const Flex = styled(Box)`
  display: flex;

  ${alignItems}
  ${alignContent}
  ${justifyContent}
  ${flexWrap}
  ${flexBasis}
  ${flexDirection}
`

Flex.propTypes = {
  ...alignItems.propTypes,
  ...alignContent.propTypes,
  ...justifyContent.propTypes,
  ...flexWrap.propTypes,
  ...flexBasis.propTypes,
  ...flexDirection.propTypes,
}

export const Text = styled(Box)`
  ${fontFamily}
  ${textAlign}
  ${lineHeight}
  ${fontWeight}
  ${letterSpacing}
`

Text.propTypes = {
  ...fontFamily.propTypes,
  ...textAlign.propTypes,
  ...lineHeight.propTypes,
  ...fontWeight.propTypes,
  ...letterSpacing.propTypes,
}

Text.defaultProps = {
  as: 'p',
  m: 0,
}

export const Heading = styled(Text)

Heading.defaultProps = {
  as: 'h2',
}
