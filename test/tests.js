const expect = require('expect')
const deepFreeze = require('deep-freeze')

import todos from '../reducers/todos'

describe('todos reducer', function () {
  it('should testAddTodo', function () {
    testAddTodo()
  })
  it('should testToggleTodo', function () {
    testToggleTodo()
  })
})

const testAddTodo = () => {
  const stateBefore = []
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'learn Redux'
  }
  const stateAfter = [
    {
      id: 0,
      text: 'learn Redux',
      completed: false
    }
  ]

  deepFreeze(stateBefore)
  deepFreeze(action)

  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter)
}

const testToggleTodo = () => {
  let stateBefore = [
    {
      id: 0,
      text: 'yo',
      completed: false
    },
    {
      id: 1,
      text: 'dude',
      completed: false
    }
  ]

  let action = {
    type: 'TOGGLE_TODO',
    id: 1
  }

  let stateAfter = [
    {
      id: 0,
      text: 'yo',
      completed: false
    },
    {
      id: 1,
      text: 'dude',
      completed: true
    }
  ]

  deepFreeze(stateBefore)
  deepFreeze(action)

  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter)
}
