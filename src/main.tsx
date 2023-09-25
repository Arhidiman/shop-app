import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createStore } from 'redux'
import rootReducer from './store/store.ts'
import { Provider } from 'react-redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import { BrowserRouter } from 'react-router-dom'

const store = createStore(rootReducer, composeWithDevTools())

export type AppState = ReturnType<typeof rootReducer>

ReactDOM.createRoot(document.getElementById('root')!).render(
    
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
)
