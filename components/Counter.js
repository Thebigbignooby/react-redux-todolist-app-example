import React from 'react'
import IncrementButton from '../containers/IncrementButton'
import DecrementButton from '../containers/DecrementButton'
import DisplayCounter from '../containers/DisplayCounter'

const Counter = () => (
  <div>
    <DisplayCounter />
    <br/>
    <IncrementButton />
    <DecrementButton />
  </div>
)

export default Counter
