import React from 'react'
import PropTypes from 'prop-types'

const As = ({ as: T, ...props }) => (<T {...props} />)

As.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
}

export default As
