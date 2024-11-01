import React, { useState } from 'react';
import '../BarberShop/BarberShop.css'; // Importamos el CSS de BarberShop para reutilizar estilos
import '../AdminDashboard/List.css';

export default function ListUsers() {
    const [datos, setDatos] = useState([
        { id: 1, name: 'Juan Pérez', email: 'Barbería@gmail.com', phone: '154111555', role: 'USER' },
        { id: 2, name: 'Facundo Pérez', email: 'Styl@gmail.com', phone: '155222000', role: 'USER' }
    ]);

    const [isEditing, setIsEditing] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    const handleEdit = (user) => {
        setCurrentUser(user);
        setIsEditing(true);
    };

    const handleDelete = (id) => {
        setDatos(datos.filter(user => user.id !== id));
    };

    const handleSave = () => {
        setDatos(datos.map(user =>
            user.id === currentUser.id ? currentUser : user
        ));
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentUser({ ...currentUser, [name]: value });
    };

    return (
        <div className="turno-container">
            <h2>USER LIST</h2>
            <div className="table-container">
                <div className="table-scroll-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Role</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datos.map((barber) => (
                                <tr key={barber.id}>
                                    <td>{barber.name}</td>
                                    <td>{barber.email}</td>
                                    <td>{barber.phone}</td>
                                    <td>{barber.role}</td>
                                    <td>
                                        <button className="boton custom-class manual-padding" onClick={() => handleEdit(barber)}>Edit</button>
                                    </td>
                                    <td>
                                        <button className="boton custom-class manual-padding" onClick={() => handleDelete(barber.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>


            {/* Modal de edición */}
            {isEditing && (
                <div className="modal-over">
                    <div className="modal">
                        <button className="close-modal" onClick={() => setIsEditing(false)}>✖</button>
                        <h3 className='titleModal-Listuser'>EDIT USER</h3>
                        <form>
                            <div className="modalForm-row">
                                <label>
                                    Email:
                                    <input
                                        type="email"
                                        name="email"
                                        value={currentUser.email}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            <div className="modalForm-row">
                                <label>
                                    Role:
                                    <select
                                        name="role"
                                        value={currentUser.role}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="USER">USER</option>
                                        <option value="BARBER">BARBER</option>
                                        <option value="ADMIN">ADMIN</option>
                                    </select>
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
