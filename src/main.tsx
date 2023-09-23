import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createStore } from 'redux'
import rootReducer from './store/store.ts'
import { Provider } from 'react-redux'
import { composeWithDevTools } from '@redux-devtools/extension'

const store = createStore(rootReducer, composeWithDevTools())

export type AppState = ReturnType<typeof rootReducer>

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
)
