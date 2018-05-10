import React from 'react'
import PropTypes from 'prop-types'

import './scss/lcdscreen.scss'

const LCDScreen = props =>
  (
    <div className="LCDScreen">
      <div className="LCDScreen__output">{props.outputText}</div>
    </div>
  )

LCDScreen.defaultProps = {
  outputText: '',
}
LCDScreen.propTypes = {
  outputText: PropTypes.string,
}

export default LCDScreen
