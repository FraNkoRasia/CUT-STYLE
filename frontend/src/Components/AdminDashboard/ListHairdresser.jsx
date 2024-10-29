import React, { useState } from 'react';
import '../BarberShop/BarberShop.css'; // Importa estilos comunes
import '../AdminDashboard/List.css'; // Importa los estilos para la lista de usuarios

export default function ListHairdresser() {
    const [datos, setDatos] = useState([
        { id: 1, name: 'LA PELU', address: 'san luis 1123', phone: '154111555', latitude: '-30.548', longitude: '-29.215' },
        { id: 2, name: 'DON MATEO', address: 'jujuy 787', phone: '155222000', latitude: '-25.548', longitude: '-27.215' }
    ]);

    const [isEditing, setIsEditing] = useState(false);
    const [currentHairdresser, setCurrentHairdresser] = useState(null);

    const handleEdit = (hairdresser) => {
        setCurrentHairdresser(hairdresser);
        setIsEditing(true);
    };

    const handleDelete = (id) => {
        setDatos(datos.filter(hairdresser => hairdresser.id !== id));
    };

    const handleSave = () => {
        setDatos(datos.map(hairdresser =>
            hairdresser.id === currentHairdresser.id ? currentHairdresser : hairdresser
        ));
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentHairdresser({ ...currentHairdresser, [name]: value });
    };

    return (
        <div className="turno-container">
            <h2>LIST OF HAIRDRESSER</h2>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Latitude</th>
                            <th>Longitude</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datos.map((hairdresser) => (
                            <tr key={hairdresser.id}>
                                <td>{hairdresser.name}</td>
                                <td>{hairdresser.address}</td>
                                <td>{hairdresser.phone}</td>
                                <td>{hairdresser.latitude}</td>
                                <td>{hairdresser.longitude}</td>
                                <td>
                                    <button className="boton custom-class manual-padding" onClick={() => handleEdit(hairdresser)}>Edit</button>
                                </td>
                                <td>
                                    <button className="boton custom-class manual-padding" onClick={() => handleDelete(hairdresser.id)}>Delete</button>
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
                        <h3 className="titleModal-Listuser">Edit Hairdresser</h3>
                        <form>
                            <div className="modalForm-row">
                                <label>
                                    Name:
                                    <input
                                        type="text"
                                        name="name"
                                        value={currentHairdresser.name}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            <div className="modalForm-row">
                                <label>
                                    Address:
                                    <input
                                        type="text"
                                        name="address"
                                        value={currentHairdresser.address}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            <div className="modalForm-row">
                                <label>
                                    Phone:
                                    <input
                                        type="text"
                                        name="phone"
                                        value={currentHairdresser.phone}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            <div className="modalForm-row">
                                <label>
                                    Latitude:
                                    <input
                                        type="text"
                                        name="latitude"
                                        value={currentHairdresser.latitude}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            <div className="modalForm-row">
                                <label>
                                    Longitude:
                                    <input
                                        type="text"
                                        name="longitude"
                                        value={currentHairdresser.longitude}
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
