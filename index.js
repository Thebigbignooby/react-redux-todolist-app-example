import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

let store = createStore(todoApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1
//     case 'DECREMENT':
//       return state - 1
//     default:
//       return state
//   }
// }
//
// let store = createStore(counter)
//
// const elCounter = document.getElementById('counter')
// const elIncrement = document.getElementById('increment')
// const elDecrement = document.getElementById('decrement')
//
// const render = () => {
//   elCounter.innerText = store.getState()
// }
//
// store.subscribe(render)
// render()
//
// elIncrement.addEventListener('click', () => {
//   store.dispatch({ type: 'INCREMENT' })
// })
//
// elDecrement.addEventListener('click', () => {
//   store.dispatch({ type: 'DECREMENT' })
// })
