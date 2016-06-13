import React, { PropTypes } from 'react'

const Increment = ({onClick}) => {
  return (
    <button
      onClick={onClick}
    >
    '+'
    </button>
  )
}

Increment.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Increment
