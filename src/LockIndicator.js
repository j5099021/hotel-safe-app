import React from 'react'
import PropTypes from 'prop-types'

import './scss/lockindicator.scss'

const LockIndicator = props => {
  let isLocked = 'unlocked'
  if (props.isLocked === true) {
    isLocked = 'locked'
  }
  const classes = `lock ${isLocked}`
  return (
    <div className={classes} />
  )
}

LockIndicator.defaultProps = {
  isLocked: false,
}
LockIndicator.propTypes = {
  isLocked: PropTypes.bool,
}

export default LockIndicator
