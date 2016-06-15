import {
  testShowCompleted,
  testShowActive,
  testShowAll,
  testShowAllByDefault,
} from './visibilityFilter.spec.js'

import { testAddTodo, testToggleTodo } from './todos.spec.js'

describe('Reducers', function () {

  describe('todos', function () {
    it('should add a Todo', function () {
      testAddTodo()
    })
    it('should toggle a Todo', function () {
      testToggleTodo()
    })
  })

  describe('visibilityFilter', function () {
    it('should return "SHOW_COMPLETED"', function () {
      testShowCompleted()
    })
    it('should return "SHOW_ACTIVE"', function () {
      testShowActive()
    })
    it('should return "SHOW_ALL"', function () {
      testShowAll()
    })
    it('should return "SHOW_ALL" by default', function () {
      testShowAllByDefault()
    })
  })

})
