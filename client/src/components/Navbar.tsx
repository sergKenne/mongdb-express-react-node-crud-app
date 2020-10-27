import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="container">
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo">
                            Recat User
                        </Link>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                            <i className="material-icons">menu</i>
                        </a>
                        <ul className="left hide-on-med-and-down navbar__list">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <Link to="/add" className="right waves-effect waves-light btn navbar__btn">add user</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar
