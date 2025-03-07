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
      <header className="bg-white text-black text-center py-3 mt-4 ">
            <h1>Bienvenidos a: </h1>
      </header>
        <h3>Routes</h3>
        <Layout></Layout>
        <Routes>
          <Route path="Dashboard" element={ <Dashboard/> }></Route>
          <Route path="Home" element={ <Home/> }></Route>
          <Route path="Login" element={ <Login/> }></Route>
          <Route path="Perfil" element={ <Perfil/> }></Route>
          <Route path="*" element={ <Home/> }></Route>
          </Routes>
        <footer className="bg-white text-black text-center py-3 mt-4">
          <div className="container">
              <p>&copy; Pedro Gomez A01027841 </p>
          </div>
        </footer>
    </>
  )
}

export default App
