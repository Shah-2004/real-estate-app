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

                    {/* <Link to="/" className="logo">
                        <img src={logo} alt="EstateHub Logo" className="logo-img" />
                    </Link> */}

                    <Link to="/">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                            {/* SVG Icon */}
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="36" height="36" rx="10" fill="#2563EB" />
                                <path d="M18 9L8 17V27H14V21H22V27H28V17L18 9Z" fill="white" />
                                <path d="M16 14H20V17H16V14Z" fill="#2563EB" />
                            </svg>

                            {/* Brand Text */}
                            <span style={{ fontSize: '20px', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.5px' }}>
                                Estate<span style={{ color: '#3b82f6' }}>Hub</span>
                            </span>
                        </div>
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
