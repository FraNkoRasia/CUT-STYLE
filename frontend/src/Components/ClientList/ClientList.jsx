import React from 'react';
import '../ClientList/ClientList.css';

export default function Turno() {
    const datos = [
        { nombre: 'Juan Pérez', fecha: '2024-10-21', hora: '10:30', servi: 'Fade y Barba' },
        { nombre: 'Facundo Pérez', fecha: '2024-09-11', hora: '10:30', servi: 'Color y Corte' }
    ];

    const handleAtendido = (nombre) => {
        alert(`Turno de ${nombre} marcado como atendido.`);
        // Aquí puedes agregar la lógica para manejar el turno como atendido
    };

    const handleCancelado = (nombre) => {
        alert(`Turno de ${nombre} cancelado.`);
        // Aquí puedes agregar la lógica para manejar la cancelación del turno
    };

    return (
        <div className="turno-container">
            <div>
                <h2>SCHEDULED SHIFTS</h2>
                <table>
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Date</th>
                            <th>Hour</th>
                            <th>Service</th>
                            <th>Completed</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datos.map((turno, index) => (
                            <tr key={index}>
                                <td>{turno.nombre}</td>
                                <td>{turno.fecha}</td>
                                <td>{turno.hora}</td>
                                <td>{turno.servi}</td>
                                <td>
                                    <button
                                        className="boton custom-class manual-padding"
                                        onClick={() => handleAtendido(turno.nombre)}>
                                        Completed
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="boton custom-class manual-padding"
                                        onClick={() => handleCancelado(turno.nombre)}>
                                        Cancel
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
