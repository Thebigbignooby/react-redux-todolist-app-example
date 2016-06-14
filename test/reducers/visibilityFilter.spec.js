const deepFreeze = require('deep-freeze')
const expect = require('expect')

import { setVisibilityFilter } from '../../actions'
import visibilityFilter from '../../reducers/visibilityFilter'

export const testShowCompleted = () => {
  let stateBefore = 'SHOW_ALL'
  let stateAfter = 'SHOW_COMPLETED'
  let action = setVisibilityFilter('SHOW_COMPLETED')

  deepFreeze(stateBefore)
  deepFreeze(action)

  expect(
    visibilityFilter(stateBefore, action)
  ).toEqual(stateAfter)
}

export const testShowActive = () => {
  let stateBefore = 'SHOW_ALL'
  let stateAfter = 'SHOW_ACTIVE'
  let action = setVisibilityFilter('SHOW_ACTIVE')

  deepFreeze(stateBefore)
  deepFreeze(action)

  expect(
    visibilityFilter(stateBefore, action)
  ).toEqual(stateAfter)
}

export const testShowAll = () => {
  let stateBefore = 'SHOW_ACTIVE'
  let stateAfter = 'SHOW_ALL'
  let action = setVisibilityFilter('SHOW_ALL')

  deepFreeze(stateBefore)
  deepFreeze(action)

  expect(
    visibilityFilter(stateBefore, action)
  ).toEqual(stateAfter)
}

export const testShowAllByDefault = () => {
  let stateAfter = 'SHOW_ALL'

  let action = {
    type: 'troll'
  }

  deepFreeze(action)

  expect(
    visibilityFilter(undefined, action)
  ).toEqual(stateAfter)
}
