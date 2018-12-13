import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Base } from '..'

const selfAligns = ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch']

const FlexItem = styled(Base)`
  order: ${props => props.order};
  flex-grow: ${props => props.flexGrow};
  flex-shrink: ${props => props.flexShrink};
  flex-basis: ${props => props.flexBasis};
  flex: ${props => props.flex};
  align-self: ${props => props.alignSelf};

  ${props => props.theme.FlexItem}
`

const valueType = PropTypes.oneOfType([PropTypes.string, PropTypes.number])

FlexItem.propTypes = {
  order: valueType,
  flexGrow: valueType,
  flexShrink: valueType,
  flexBasis: valueType,
  flex: valueType,
  alignSelf: PropTypes.oneOf(selfAligns),
}

FlexItem.defaultProps = {
  as: 'div',
}

export default FlexItem
