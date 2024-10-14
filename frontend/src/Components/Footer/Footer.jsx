import React from 'react';
import '../Footer/Footer.css';
import { Link } from 'react-router-dom';
import logoImage from '/logoNav-2.png';

export default function Footer() {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Agrega un efecto de desplazamiento suave
        });
    };

    return (
        <main>
            <footer className='footer'>
                <div className='footer-logo'>
                    <img src={logoImage} alt="logo" />
                </div>

                <div className='footer-navigation'>
                    <Link to="/about" onClick={handleScrollToTop}>
                        <h2><span className='iconoAbout'>👥</span> About Us</h2>
                    </Link>
                    <p>🕑 Lunes - Viernes: 9 AM - 6 PM</p>
                    <p>📍 Calle Falsa 123, Ciudad, País</p>
                </div>

                <div className='footer-rights'>
                    <p>© 2024 - CUT & STYLE. Casi todos los derechos reservados.</p>
                </div>
            </footer>
        </main>
    );
}
