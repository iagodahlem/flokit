import styled from 'styled-components'
import { buttonStyle } from 'styled-system'
import { Button as B } from 'flokit'

const Button = styled(B)`
  ${buttonStyle}

  cursor: pointer;
  transition: all .3s ease;

  &:hover {
    opacity: .8;
  }

  &:disabled {
    cursor: not-allowed;
  }
`

Button.defaultProps = {
  variant: 'primary',
  minWidth: '122px',
  height: '48px',
  padding: '0 2.8rem',
  borderRadius: '50vh',
  borderWidth: '2px',
  borderStyle: 'solid',
  fontSize: 5,
  fontWeight: 3,
}

export default Button
