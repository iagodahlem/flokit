import styled from 'styled-components'
import { flex } from './system'
import Box from './Box'

const Flex = styled(Box)`
  ${flex}
`

Flex.propTypes = {
  ...flex.propTypes,
}

Flex.defaultProps = {
  display: 'flex',
}

export default Flex
