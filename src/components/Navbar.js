import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({login}) {
    return (
        <div>
            <nav className="navbar bg-dark justify-content-center d-flex justify-content-around" data-bs-theme="dark">
                <span className='text-light fw-bold'>Recipe App</span>
                <ul className='navbar-nav flex-row gap-5' >
                    <li className='nav-item'>
                        <Link className='nav-link' to="/">Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/about">About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/contact">Contact</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/login">{login?"Logout":"Login"}</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar