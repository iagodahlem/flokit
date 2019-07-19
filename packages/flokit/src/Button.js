import styled from 'styled-components'
import Text from './Text'

const Button = styled(Text)`
  justify-content: center;
  align-items: center;
  outline: none;
  text-decoration: none;
`

Button.defaultProps = {
  as: 'button',
  display: 'inline-flex',
  fontFamily: 'inherit',
  lineHeight: 'inherit',
}

export default Button
