import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logos/logo.jpg'
import './Navbar.css'


const Navbar = () => {
    return (
        <>
            <header className="navbar">

                <div className="navbar-content">

                    {/* <!-- Logo --> */}

                    <Link to="/" className="logo">
                        <img src={logo} alt="EstateHub Logo" className="logo-img" />
                    </Link>
                    {/* <!-- Navigation --> */}

                    <nav className="nav-links">

                        <li className="nav-item"><Link to="/">Home</Link></li>
                        <li className="nav-item"><Link to="/properties">Properties</Link></li>
                        <li className="nav-item"><Link to="/about">About</Link></li>
                        <li className="nav-item"><Link to="/contact">Contact</Link></li>

                    </nav>

                    {/* <!-- Right Side Buttons --> */}

                    <div className="nav-buttons">

                        <Link to="/login" className="login-btn">
                            Login
                        </Link>

                        <button className="register-btn">

                            Register

                        </button>

                    </div>

                </div>

            </header>
        </>
    )
}

export default Navbar
