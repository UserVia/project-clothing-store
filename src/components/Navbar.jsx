import { Link, NavLink } from 'react-router-dom'
import '../styles/style-navbar.css'
import logo from '../images/logo-tribu-thendy.png'
import Badge from '@mui/material/Badge'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'

export const Navbar = () => {
    const {listaCompras} =useContext(CarritoContext)
    return (
        <>
            <nav className="navbar navbar-expand-lg position-sticky top-0 z-2">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-list-nested" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5" />
                        </svg></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                        <Link className="navbar-brand d-flex justify-content-center" to="/"><img src={logo} alt="logo-principal" /></Link>
                        <ul className="navbar-nav align-items-center justify-content-around">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">My Order</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">My Account</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Sign in</a>
                            </li>
                            <NavLink className="nav-item carrito" to="/carrito-compras">
                                <Badge badgeContent={listaCompras.length} color="success">
                                    <ShoppingCartIcon/>
                                </Badge>
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
