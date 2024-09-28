import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { ComprasPage } from './pages/ComprasPage'
import { CarritoCompras } from './pages/CarritoCompras'
import { CarritoProvider } from './context/CarritoProvider'

function App() {
  return (

    <CarritoProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<ComprasPage />} />
        <Route path="/carrito-compras" element={<CarritoCompras />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </CarritoProvider>

  )
}

export default App
