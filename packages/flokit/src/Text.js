import styled from 'styled-components'
import { typography } from './system'
import Box from './Box'

const Text = styled(Box)`
  ${typography}
`

Text.propTypes = {
  ...typography.propTypes,
}

Text.defaultProps = {
  as: 'p',
  m: 0,
}

export default Text
