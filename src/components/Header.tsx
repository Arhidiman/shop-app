import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header() {
    const [count, setCount] = useState(0)

    return (
        <header>
            Infomatics test app
        </header>
    )
}

export default Header
