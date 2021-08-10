import { Provider } from 'react-redux'
import React from 'react'

//REDUX + PERSISTENCIA + ROUTER
import { store, persistor } from './redux/stores/store'
import { PersistGate } from 'redux-persist/integration/react'
import Router from './router/Navegation'

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Router />
      </PersistGate>
    </Provider>
  )
}