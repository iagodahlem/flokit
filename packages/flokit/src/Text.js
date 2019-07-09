import styled from 'styled-components'
import { typography } from 'styled-system'
import propTypes from '@styled-system/prop-types'
import Box from './Box'

const Text = styled(Box)`
  ${typography}
`

Text.propTypes = {
  ...propTypes.typography,
}

Text.defaultProps = {
  as: 'p',
  m: 0,
}

export default Text
