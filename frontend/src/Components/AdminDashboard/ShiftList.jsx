import React, { useState } from 'react';
import '../BarberShop/BarberShop.css'; // Importa estilos comunes
import '../AdminDashboard/List.css'; // Importa los estilos para la lista de usuarios

export default function ShiftList() {
    const [datos, setDatos] = useState([
        { id: 1, nombre: 'Juan Pérez', peluqueria: 'DON MATEO', barberia: 'Barbería Estilo', fecha: '2024-10-21', hora: '10:30', servi: 'Fade y Barba' },
        { id: 2, nombre: 'Facundo Pérez', peluqueria: 'Pervieux', barberia: 'Styl Main', fecha: '2024-09-11', hora: '11:30', servi: 'Color y Corte' }
    ]);

    const [isEditing, setIsEditing] = useState(false);
    const [currentShift, setCurrentShift] = useState(null);

    const handleEdit = (shift) => {
        setCurrentShift(shift);
        setIsEditing(true);
    };

    const handleDelete = (id) => {
        setDatos(datos.filter(shift => shift.id !== id));
    };

    const handleSave = () => {
        setDatos(datos.map(shift =>
            shift.id === currentShift.id ? currentShift : shift
        ));
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentShift({ ...currentShift, [name]: value });
    };

    return (
        <div className="turno-container">
            <h2>SCHEDULED SHIFTS</h2>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Haird Salon</th>
                            <th>Barber</th>
                            <th>Date</th>
                            <th>Hour</th>
                            <th>Service</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datos.map((shift) => (
                            <tr key={shift.id}>
                                <td>{shift.nombre}</td>
                                <td>{shift.peluqueria}</td>
                                <td>{shift.barberia}</td>
                                <td>{shift.fecha}</td>
                                <td>{shift.hora}</td>
                                <td>{shift.servi}</td>
                                <td>
                                    <button className="boton custom-class manual-padding" onClick={() => handleEdit(shift)}>Edit</button>
                                </td>
                                <td>
                                    <button className="boton custom-class manual-padding" onClick={() => handleDelete(shift.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal de edición */}
            {isEditing && (
                <div className="modal-over">
                    <div className="modal">
                        <button className="close-modal" onClick={() => setIsEditing(false)}>✖</button>
                        <h3 className="titleModal-Listuser">EDIT SHIFT</h3>
                        <form>
                            <div className="modalForm-row">
                                <label>
                                    User:
                                    <input
                                        type="text"
                                        name="nombre"
                                        value={currentShift.nombre}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            <div className="modalForm-row">
                                <label>
                                    Barber:
                                    <input
                                        type="text"
                                        name="barberia"
                                        value={currentShift.barberia}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            <div className="modalForm-row">
                                <label>
                                    Date:
                                    <input
                                        type="date"
                                        name="fecha"
                                        value={currentShift.fecha}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            <div className="modalForm-row">
                                <label>
                                    Hour:
                                    <input
                                        type="time"
                                        name="hora"
                                        value={currentShift.hora}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            <div className="modalForm-row">
                                <label>
                                    Service:
                                    <input
                                        type="text"
                                        name="servi"
                                        value={currentShift.servi}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            <div className="modal-buttons btnModal-userlist">
                                <button type="button" className="boton custom-class" onClick={handleSave}>Save</button>
                                <button type="button" className="boton custom-class" onClick={() => setIsEditing(false)}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
