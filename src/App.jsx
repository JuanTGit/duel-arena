import Fight from './components/Fight'
import Menu from './components/Menu'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <div className='container'>
                    <Route path='/' element={<Menu />}/>
                    <Route path='/local' element={<Fight />}/>
                </div>
            </Routes>
        </BrowserRouter>
    )
}

export default App
