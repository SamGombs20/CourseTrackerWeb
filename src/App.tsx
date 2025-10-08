
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import MainPage from './pages/MainPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='' element={<MainPage/>}/>
      </Route>
    </Routes>
  )
}

export default App
