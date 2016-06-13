import React, { PropTypes } from 'react'

const Decrement = ({onClick}) => {
  <button
    onClick={onClick}
  >
  '-'
  </button>
}

Decrement.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Decrement
