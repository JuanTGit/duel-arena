import Menu from './components/Menu'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Online from './components/Lobby/Online'
import Local from './components/Lobby/Local'
import './main.css'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                        <Route path='/' element={<Menu />}/>
                        <Route path='/local' element={<Local />}/>
                        <Route path='/online' element={<Online />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
