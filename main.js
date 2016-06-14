import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import counter from './reducers/counter'
import Counter from './components/Counter'

const store = createStore(counter)

render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('app')
)
