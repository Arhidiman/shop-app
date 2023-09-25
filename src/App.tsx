import './App.css'
import Header from './components/shared/header/Header'
import AppRouter from './providers/AppRouter'
import MainPage from './components/pages/main-page/MainPage'

function App() {
    return (
        <>
            <Header/>
            <main>
                <MainPage/>
            </main>
        </>
    )
}

export default App
