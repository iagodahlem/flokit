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
  alignItems: propTypes.flexbox.alignItems,
  alignContent: propTypes.flexbox.alignContent,
  justifyItems: propTypes.flexbox.justifyItems,
  justifyContent: propTypes.flexbox.justifyContent,
  flexWrap: propTypes.flexbox.flexWrap,
  flexDirection: propTypes.flexbox.flexDirection,
}

export default Flex
