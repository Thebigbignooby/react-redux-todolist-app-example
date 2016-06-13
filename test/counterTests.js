const expect = require('expect')
const deepFreeze = require('deep-freeze')

import counter from '../reducers/counter'
import { increment, decrement } from '../actions'

describe('counter reducer', function () {
  it('should decrement', function () {
    testDecrement()
  })
  it('should increment', function () {
    testIncrement()
  })
})

const testDecrement = () => {
  let stateBefore = 0
  let action = decrement()

  let stateAfter = -1

  deepFreeze(stateBefore)
  deepFreeze(action)

  expect(
    counter(stateBefore, action)
  ).toEqual(stateAfter)
}

const testIncrement = () => {
  let stateBefore = 0
  let action = increment()

  let stateAfter = 1

  deepFreeze(stateBefore)
  deepFreeze(action)

  expect(
    counter(stateBefore, action)
  ).toEqual(stateAfter)
}
