import React from 'react';
import '../ClientList/ClientList.css';

export default function Turno() {
    const datos = [
        { nombre: 'Juan Pérez', fecha: '2024-10-21 / 10:30 Am', servi: 'Fade y Barba' },
        { nombre: 'Facundo Pérez', fecha: '2024-9-11 / 11:00 Am', servi: 'Color y Corte' }
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
            <h2>Turnos Programados</h2>
            <table>
                <thead>
                    <tr>
                        <th>Usuario</th>
                        <th>Turno</th>
                        <th>Servicio</th>
                        <th>Acciones</th> {/* Nueva columna para los botones */}
                    </tr>
                </thead>
                <tbody>
                    {datos.map((turno, index) => (
                        <tr key={index}>
                            <td>{turno.nombre}</td>
                            <td>{turno.fecha}</td>
                            <td>{turno.servi}</td>
                            <td>
                                <button 
                                    className="atendido-btn" 
                                    onClick={() => handleAtendido(turno.nombre)}>
                                    Atendido
                                </button>
                                <button 
                                    className="cancelado-btn" 
                                    onClick={() => handleCancelado(turno.nombre)}>
                                    Cancelado
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
