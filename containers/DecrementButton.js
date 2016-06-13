// import Decrement from '../components/Decrement'
import React from 'react'
import { connect } from 'react-redux'
import { decrement } from '../actions'

let Decrement = ({dispatch}) => {
  return (
    <button
    onClick={() => dispatch(decrement())}
    >
    -
    </button>
  )
}

const DecrementButton = connect()(Decrement)

export default DecrementButton
