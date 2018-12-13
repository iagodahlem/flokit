import styled from 'styled-components'
import PropTypes from 'prop-types'
import { As } from '..'

const positions = ['static', 'relative', 'absolute', 'sticky']

const Base = styled(As)`
  position: ${props => props.position};
  top: ${props => props.top};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  left: ${props => props.left};

  ${props => props.theme.Base}
`

const valueType = PropTypes.oneOfType([PropTypes.string, PropTypes.number])

Base.propTypes = {
  position: PropTypes.oneOf(positions),
  top: valueType,
  right: valueType,
  bottom: valueType,
  left: valueType,
}

Base.defaultProps = {
  as: 'div',
}

export default Base
