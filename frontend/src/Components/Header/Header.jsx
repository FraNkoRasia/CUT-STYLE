import React, { useState, useEffect, useRef } from 'react';
import '../Header/Header.css';
import { Link, useNavigate } from 'react-router-dom';
import logoImage from '/logoNav-2.webp';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userRole, setUserRole] = useState(null);
    const [activeItem, setActiveItem] = useState(null); // Estado para el item activo
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

    const handleMenuClick = (path, index) => {
        setMenuOpen(false);
        setActiveItem(index); // Actualiza el item activo
        navigate(path);
    };

    const handleLogout = () => {
        auth.logout();
        window.location.href = '/login';
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
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
                        ref={menuRef}
                        className={`ul ${menuOpen ? 'open' : ''}`}
                    >
                        {!isLoggedIn && (
                            <>
                                <li
                                    className={activeItem === 0 ? 'active' : ''}
                                    onClick={() => handleMenuClick('/', 0)}
                                >
                                    <Link to="/">Home</Link>
                                </li>
                                <li
                                    className={activeItem === 1 ? 'active' : ''}
                                    onClick={() => handleMenuClick('/register', 1)}
                                >
                                    <Link to="/register">User Register</Link>
                                </li>
                                <li
                                    className={activeItem === 2 ? 'active' : ''}
                                    onClick={() => handleMenuClick('/registerbarber', 2)}
                                >
                                    <Link to="/registerbarber">Barber Register</Link>
                                </li>
                                <li
                                    className={activeItem === 3 ? 'active' : ''}
                                    onClick={() => handleMenuClick('/login', 3)}
                                >
                                    <Link to="/login">Login</Link>
                                </li>
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
