import React from 'react';
import './MyList.css';

export default function MyTurn() {
    const datos = [
        { nombre: 'Juan Pérez', barberia: 'Barbería Estilo', fecha: '2024-10-21', hora: '10:30', servi: 'Fade y Barba' },
        { nombre: 'Facundo Pérez', barberia: 'Styl Main', fecha: '2024-9-11', hora: '10:30', servi: 'Color y Corte' }
    ];

    return (
        <div className="turno-container">
            <h2>SCHEDULED SHIFTS</h2>
            <table>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Barber</th>
                        <th>Date</th>
                        <th>Hour</th>
                        <th>Service</th>
                    </tr>
                </thead>
                <tbody>
                    {datos.map((turno, index) => (
                        <tr className='turnList' key={index}>
                            <td>{turno.nombre}</td>
                            <td>{turno.barberia}</td>
                            <td>{turno.fecha}</td>
                            <td>{turno.hora}</td>
                            <td>{turno.servi}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}