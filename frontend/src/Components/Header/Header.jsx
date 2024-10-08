import React, { useState, useEffect } from 'react';
import '../Header/Header.css';
import { Link, useNavigate } from 'react-router-dom';
import logoImage from '/logo.png'; // Si no lo usas, puedes eliminarlo

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userRole, setUserRole] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuthStatus = () => {
            const token = sessionStorage.getItem('token');
            const loggedIn = !!token; // Verifica si el token existe
            setIsLoggedIn(loggedIn);
            if (loggedIn) {
                const role = sessionStorage.getItem('rol');
                setUserRole(role);
            }
        };
        checkAuthStatus();
    }, []);

    const handleMenuClick = (path) => {
        setMenuOpen(false);
        navigate(path);
    };

    const handleLogout = () => {
        auth.logout();
        window.location.href = '/login';
    };

    return (
        <header>
            <nav>

                <div className="hamburguesa">
                    <div className="logo">
                        <Link to="/">
                            <img src={logoImage} alt="logo" />
                        </Link>
                    </div>
                    <input className='checkHamburguer' type="checkbox" id="menu" />
                    <label className='hamburguesita' htmlFor="menu">
                        <span></span>
                    </label>
                    <ul className={`ul ${menuOpen ? 'open' : ''}`}>
                        {!isLoggedIn && (
                            <>
                                <li><Link to="/" onClick={() => handleMenuClick('/')}>Home</Link></li>
                                <li><Link to="/register" onClick={() => handleMenuClick('/register')}>Register</Link></li>
                                <li><Link to="/login" onClick={() => handleMenuClick('/login')}>Login</Link></li>
                            </>
                        )}
                        {isLoggedIn && userRole === 'Administrador' && (
                            <>
                               
                            </>
                        )}
                        {isLoggedIn && userRole === 'Usuario' && (
                            <>
                                
                            </>
                        )}
                    </ul>
                </div>
            </nav>
        </header>
    );
}
