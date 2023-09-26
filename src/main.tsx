import React from "react"
import ReactDOM from "react-dom/client"
import App from "src/App"
import "./index.scss"
import { createStore } from "redux"
import rootReducer from "src/store/store"
import { Provider } from "react-redux"
import { composeWithDevTools } from "@redux-devtools/extension"

const store = createStore(rootReducer, composeWithDevTools())

export type AppState = ReturnType<typeof rootReducer>

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
)
