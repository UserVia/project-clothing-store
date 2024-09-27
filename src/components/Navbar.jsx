import { Link, NavLink } from 'react-router-dom'
import '../styles/style-navbar.css'
import logo from '../images/logo-tribu-thendy.png'
export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                        <Link className="navbar-brand" to="/"><img src={logo} alt="logo-principal" /></Link>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">My Order</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">My Account</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Sign in</a>
                            </li>
                            <NavLink className="nav-item" to="/carrito-compras">
                                Features
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
