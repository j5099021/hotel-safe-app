import React from 'react'
import PropTypes from 'prop-types'

const Keypad = props => (
  <div className="keypad">
    {props.children}
  </div>
)

Keypad.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Keypad
