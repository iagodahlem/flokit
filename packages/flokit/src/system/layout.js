import {
  style,
  num,
  get,
  px,
  mapProps,
  compose,
  display,
  verticalAlign,
  overflow,
} from 'styled-system'

const getWidth = (n, scale) => {
  if (!num(n)) {
    return px(get(scale, n, n))
  }

  if (n > 1) {
    return px(n)
  }

  return `${n * 100}%`
}

const createSizeProp = prop => style({
  prop,
  transformValue: getWidth,
  key: 'sizes',
})

const width = createSizeProp('width')
const height = createSizeProp('height')
const minWidth = createSizeProp('minWidth')
const maxWidth = createSizeProp('maxWidth')
const minHeight = createSizeProp('minHeight')
const maxHeight = createSizeProp('maxHeight')

const size = mapProps(props => ({
  ...props,
  width: props.size,
  height: props.size,
}))(
  compose(
    width,
    height
  )
)

export default compose(
  display,
  width,
  height,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  size,
  verticalAlign,
  overflow
)
