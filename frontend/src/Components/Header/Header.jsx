import React, { useState, useEffect, useRef } from 'react';
import '../Header/Header.css';
import { Link, useNavigate } from 'react-router-dom';
import logoImage from '/logoNav-2.png';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userRole, setUserRole] = useState(null);
    const menuRef = useRef(null);
    const hamburguesaRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuthStatus = () => {
            const token = sessionStorage.getItem('token');
            const loggedIn = !!token;
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

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Si el clic no está en el menú ni en el botón de hamburguesa
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                hamburguesaRef.current &&
                !hamburguesaRef.current.contains(event.target)
            ) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mouseup', handleClickOutside);
        return () => {
            document.removeEventListener('mouseup', handleClickOutside);
        };
    }, []);

    return (
        <header>
            <nav>
                <div className="hamburguesa">
                    <div className="logo">
                        <Link to="/">
                            <img src={logoImage} alt="logo" />
                        </Link>
                    </div>

                    <label
                        ref={hamburguesaRef}
                        className={`hamburguesita ${menuOpen ? 'open' : ''}`}
                        htmlFor="menu"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span></span>
                    </label>

                    <ul
                        ref={menuRef} // Ref al menú
                        className={`ul ${menuOpen ? 'open' : ''}`}
                    >
                        {!isLoggedIn && (
                            <>
                                <li><Link to="/" onClick={() => handleMenuClick('/')}>Home</Link></li>
                                <li><Link to="/register" onClick={() => handleMenuClick('/register')}>Register User</Link></li>
                                <li><Link to="/registerstylist" onClick={() => handleMenuClick('/registerstylist')}>Register Stylist</Link></li>
                                <li><Link to="/login" onClick={() => handleMenuClick('/login')}>Login</Link></li>
                            </>
                        )}
                        {isLoggedIn && userRole === 'Administrador' && (
                            <>
                                {/* Opciones para Administrador */}
                            </>
                        )}
                        {isLoggedIn && userRole === 'Usuario' && (
                            <>
                                {/* Opciones para Usuario */}
                            </>
                        )}
                    </ul>
                </div>
            </nav>
        </header>
    );
}
