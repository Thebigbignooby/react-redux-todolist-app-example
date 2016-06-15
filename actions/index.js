let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const tagTodoUrgent = (id) => {
  return {
    type: 'TAG_TODO_URGENT',
    id,
    urgent: true
  }
}

export const tagTodoImportant = (id) => {
  return {
    type: 'TAG_TODO_IMPORTANT',
    id,
    important: true
  }
}
