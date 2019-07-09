import styled from 'styled-components'
import {
  alignItems,
  alignContent,
  justifyItems,
  justifyContent,
  flexWrap,
  flexDirection,
  compose,
} from 'styled-system'
import propTypes from '@styled-system/prop-types'
import Box from './Box'

const Flex = styled(Box)`
  display: flex;

  ${compose(
    alignItems,
    alignContent,
    justifyItems,
    justifyContent,
    flexWrap,
    flexDirection,
  )}
`

Flex.propTypes = {
  ...propTypes.flexbox.alignItems,
  ...propTypes.flexbox.alignContent,
  ...propTypes.flexbox.justifyItems,
  ...propTypes.flexbox.justifyContent,
  ...propTypes.flexbox.flexWrap,
  ...propTypes.flexbox.flexDirection,
}

export default Flex
