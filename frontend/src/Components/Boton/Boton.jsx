import React from 'react';
import './Boton.css';

const Boton = ({ texto, onClick, className = 'boton' }) => {
    return (
        <button onClick={onClick} className={className}>
            {texto}
        </button>
    );
};

export default Boton;
