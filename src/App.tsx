
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import MainPage from './pages/MainPage'
import { LogInPage } from './pages/LogInPage'
import { PublicRoute } from './routes/PublicRoute'
import { ProtectedRoute } from './routes/ProtectedRoute'
// import { RegisterPage } from './pages/RegisterPage'

function App() {

  return (
    <Routes>
      {/* Public Route for unlogged in users*/}
      <Route element={<PublicRoute/>}>
        <Route path='/login' element={<LogInPage />} />
      </Route>
      {/* Private routes for logged in users */}
      <Route element={<ProtectedRoute/>}>
        <Route element={<Layout />}>
        <Route path='/' element={<MainPage />} />
      </Route>
      </Route>
    </Routes>
  )
}

export default App
