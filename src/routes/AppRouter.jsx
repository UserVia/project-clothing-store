import React from 'react'
import { CarritoProvider } from '../context/CarritoProvider'
import { Navbar } from '../components/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ComprasPage } from '../pages/ComprasPage'
import { CarritoCompras } from '../pages/CarritoCompras'
import { ElectronicsPage } from '../pages/ElectronicsPage'
import { JeweleryPage } from '../pages/JeweleryPage'
import { MenClothingPage } from '../pages/MenClothingPage'
import { WomenClothingPage } from '../pages/WomenClothingPage'

export const AppRouter = () => {
    return (
        <CarritoProvider>
            <Navbar />
            <Routes>
                <Route path="/" element={<ComprasPage />} />
                <Route path="/carrito-compras" element={<CarritoCompras />} />
                <Route path="/electronics" element={<ElectronicsPage/>}/>
                <Route path="/jewelery" element={<JeweleryPage/>}/>
                <Route path="/men-clothing" element={<MenClothingPage/>}/>
                <Route path="/women-clothing" element={<WomenClothingPage/>}/>
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </CarritoProvider>
    )
}
