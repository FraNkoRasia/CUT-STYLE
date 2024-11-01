import React, { useState, useEffect, useRef } from 'react';
import '../Header/Header.css';
import { Link, useNavigate } from 'react-router-dom';
import logoImage from '/logoNav-2.webp';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userRole, setUserRole] = useState(null);
    const [activeItem, setActiveItem] = useState(null);
    const [adminMenuOpen, setAdminMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const hamburguesaRef = useRef(null);
    const adminMenuRef = useRef(null); // Nueva referencia para el submenú
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuthStatus = () => {
            const token = sessionStorage.getItem('token');
            const loggedIn = !!token;
            setIsLoggedIn(loggedIn);
            if (loggedIn) {
                const role = localStorage.getItem('role');
                setUserRole(role);
            }
        };
        checkAuthStatus();
    }, []);

    const handleMenuClick = (path, index) => {
        setMenuOpen(false);
        setActiveItem(index);
        navigate(path);
    };

    const handleLogout = () => {
        localStorage.clear();
        sessionStorage.clear();
        window.location.replace('/');
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Cerrar menú de hamburguesa
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                hamburguesaRef.current &&
                !hamburguesaRef.current.contains(event.target)
            ) {
                setMenuOpen(false);
            }

            // Cerrar submenú de admin
            if (
                adminMenuRef.current &&
                !adminMenuRef.current.contains(event.target) &&
                !hamburguesaRef.current.contains(event.target) // Asegúrate de que el clic no sea en el botón de hamburguesa
            ) {
                setAdminMenuOpen(false);
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

                    <ul ref={menuRef} className={`ul ${menuOpen ? 'open' : ''}`}>
                        <li><Link to="/" onClick={() => handleMenuClick('/')}>Home</Link></li>

                        {/* Mostrar Login y Register solo si NO está logueado */}
                        {!isLoggedIn && (
                            <>
                                <li><Link to="/register" onClick={() => handleMenuClick('/register')}>User Register</Link></li>
                                <li><Link to="/registerbarber" onClick={() => handleMenuClick('/registerbarber')}>Barber Register</Link></li>
                                <li><Link to="/login" onClick={() => handleMenuClick('/login')}>Login</Link></li>
                            </>
                        )}

                        {/* Opciones para Administrador con Submenú */}
                        {isLoggedIn && userRole === 'ADMIN' && (
                            <li ref={adminMenuRef}>
                                <button
                                    className="admin-dropdown-toggle"
                                    onClick={() => setAdminMenuOpen(!adminMenuOpen)}
                                >
                                    Dashboard
                                </button>
                                <ul className={`admin-submenu ${adminMenuOpen ? 'open' : ''}`}>
                                    <li><Link to="/admin/users" onClick={() => handleMenuClick('/admin/users')}>List Users</Link></li>
                                    <li><Link to="/admin/barbers" onClick={() => handleMenuClick('/admin/barbers')}>List Barbers</Link></li>
                                    <li><Link to="/admin/turns" onClick={() => handleMenuClick('/admin/turns')}>Shift List</Link></li>
                                    <li><Link to="/admin/hairdresser" onClick={() => handleMenuClick('/admin/hairdresser')}>List Hairdresser</Link></li>
                                </ul>
                            </li>
                        )}

                        {/* Opciones para Usuario */}
                        {isLoggedIn && userRole === 'USER' && (
                            <li><Link to="/turn" onClick={() => handleMenuClick('/turno')}>My Turn</Link></li>
                        )}

                        {/* Opciones para Barber */}
                        {isLoggedIn && userRole === 'BARBER' && (
                            <>
                                <li><Link to="/clientlist" onClick={() => handleMenuClick('/clientlist')}>Client List</Link></li>
                                <li><Link to="/hairdresser" onClick={() => handleMenuClick('/hairdresser')}>Hairdresser</Link></li>
                                <li><Link to="/myhairdresser" onClick={() => handleMenuClick('/myhairdresser')}>My Hairdresser</Link></li>
                            </>
                        )}

                        {/* Opción de Logout para todos los roles */}
                        {isLoggedIn && (
                            <li><button onClick={handleLogout}>Logout</button></li>
                        )}
                    </ul>
                </div>
            </nav>
        </header>
    );
}
