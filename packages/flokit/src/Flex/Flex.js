import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Base } from '..'

const directions = ['row', 'row-reverse', 'column', 'column-reverse']
const wraps = ['nowrap', 'wrap', 'wrapReverse']
const contentJustifies = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']
const itemsAligns = ['flex-start', 'flex-end', 'center', 'stretch', 'baseline']
const contentAligns = ['flex-start', 'flex-end', 'center', 'stretch', 'space-between', 'space-around']

const Flex = styled(Base)`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  flex-wrap: ${props => props.flexWrap};
  flex-flow: ${props => props.flexFlow};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  align-content: ${props => props.alignContent};

  ${props => props.theme.Flex}
`

const valueType = PropTypes.oneOfType([PropTypes.string, PropTypes.number])

Flex.propTypes = {
  flexDirection: PropTypes.oneOf(directions),
  flexWrap: PropTypes.oneOf(wraps),
  flexFlow: valueType,
  justifyContent: PropTypes.oneOf(contentJustifies),
  alignItems: PropTypes.oneOf(itemsAligns),
  alignContent: PropTypes.oneOf(contentAligns),
}

Flex.defaultProps = {
  as: 'div',
}

export default Flex
