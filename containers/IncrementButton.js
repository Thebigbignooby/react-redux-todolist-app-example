// import Increment from '../components/Increment'
import React from 'react'
import { connect } from 'react-redux'
import { increment } from '../actions'

let Increment = ({dispatch}) => {
  return (
    <button
      onClick={() => dispatch(increment())}
    >
    +
    </button>
  )
}

const IncrementButton = connect()(Increment)

export default IncrementButton
