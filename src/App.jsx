
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Test from './Test'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/button' element={<Test />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
