import React from 'react'

export default function ShiftList() {
    const datos = [
        { nombre: 'Juan Pérez', barberia: 'Barbería Estilo', fecha: '2024-10-21 / 10:30 Am', servi: 'Fade y Barba' },
        { nombre: 'Facundo Pérez', barberia: 'Styl Main', fecha: '2024-9-11 / 11:00 Am', servi: 'Color y Corte' }
    ];

    return (
        <div className="turno-container">
            <h2>SCHEDULED SHIFTS</h2>
            <table>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Barber</th>
                        <th>Shift</th>
                        <th>Service</th>
                    </tr>
                </thead>
                <tbody>
                    {datos.map((turno, index) => (
                        <tr key={index}>
                            <td>{turno.nombre}</td>
                            <td>{turno.barberia}</td>
                            <td>{turno.fecha}</td>
                            <td>{turno.servi}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}