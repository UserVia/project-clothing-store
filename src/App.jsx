import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { ComprasPage } from './pages/ComprasPage'
import { CarritoCompras } from './pages/CarritoCompras'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<ComprasPage/>}/>
      <Route path="/carrito-compras" element={<CarritoCompras/>}/>
      <Route path="/*" element={<Navigate to="/"/>} />
    </Routes>
    </>
  )
}

export default App
