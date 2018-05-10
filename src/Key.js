import React from 'react'
import PropTypes from 'prop-types'

const Key = props => {
  const classes = `keypad__key--button ${props.extraClasses}`

  var keyDiv;
  if (props.key%3==0) {
    keyDiv = (<div className="keypad__key">
      <button className={classes} onClick={props.onClick} value={props.value}>{props.value}</button>
    </div>);
  } else {
    keyDiv = (<div className="keypad__key">
      <button className={classes} onClick={props.onClick} value={props.value}>{props.value}</button>
    </div>);
  }

  return (
    <div>
      {keyDiv}
    </div>
  )
}

Key.defaultProps = {
  extraClasses: '',
}
Key.propTypes = {
  value: PropTypes.string.isRequired,
  extraClasses: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

export default Key
