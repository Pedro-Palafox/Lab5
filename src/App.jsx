import { Routes, Route } from 'react-router-dom';
import './App.css'
import { Dashboard } from './pages/Dashboard'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Perfil } from './pages/Perfil'
import { Layout } from './pages/Layout';

function App() {
  return (
    <>
      <div>
        <h1>Routes</h1>
        <Layout></Layout>
        <Routes>
          <Route path="Dashboard" element={ <Dashboard/> }></Route>
          <Route path="Home" element={ <Home/> }></Route>
          <Route path="Login" element={ <Login/> }></Route>
          <Route path="Perfil" element={ <Perfil/> }></Route>
          <Route path="*" element={ <Home/> }></Route>
          </Routes>
      </div>
    </>
  )
}

export default App
