import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../BarberShop/BarberShop.css'; // Reutilizando estilos
import '../AdminDashboard/List.css';
import toast, { Toaster } from "react-hot-toast";

export default function ListUsers() {
    const [isEditing, setIsEditing] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [users, setUsers] = useState([]);

    const token = sessionStorage.getItem("token");

    useEffect(() => {
        const fetchUsers = async () => {
            if (!token) {
                toast.error("No se encontró el token. Por favor, inicia sesión.");
                return;
            }

            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/api/v1/users`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                // Se espera que los datos incluyan el rol como un objeto con 'name'
                setUsers(response.data);
            } catch (error) {
                console.log(error);
                toast.error("Error al buscar usuarios. Por favor, intenta nuevamente.");
            }
        };
        fetchUsers();
    }, [token]);

    const handleEdit = (user) => {
        setCurrentUser({ ...user }); // Copia del usuario actual
        setIsEditing(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    const handleSave = async () => {
        if (!currentUser) return;
    
        const updatedData = {
            name: currentUser.name,
            email: currentUser.email,
            phone: currentUser.phone,
            lastname: currentUser.lastname,
            roleId: currentUser.roleId, // Usando roleId
            ...(currentUser.password && { password: currentUser.password }), // Solo enviar si hay un cambio de contraseña
        };
    
        try {
            const response = await axios.put(
                `${import.meta.env.VITE_API_URL}/api/v1/users/${currentUser.id}`,
                updatedData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
    
            // Actualiza el estado de users con los datos actualizados
            setUsers((prevUsers) =>
                prevUsers.map((user) =>
                    user.id === response.data.id
                        ? { ...user, ...response.data, role: { name: getRoleName(response.data.roleId) } }
                        : user
                )
            );
    
            setIsEditing(false);
            toast.success("Usuario actualizado correctamente.");
        } catch (error) {
            console.error(error);
            toast.error("Error al actualizar usuario. Por favor, intenta nuevamente.");
        }
    };
    
    // Función para obtener el nombre del rol según el ID
    const getRoleName = (roleId) => {
        const roles = {
            1: "ADMIN",
            2: "USER",
            3: "BARBER",
        };
        return roles[roleId] || "N/A";
    };
    


    const handleDelete = async (id) => {
        try {
            await axios.delete(
                `${import.meta.env.VITE_API_URL}/api/v1/users/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setUsers(users.filter((user) => user.id !== id));
            toast.success("Usuario eliminado exitosamente.");
        } catch (error) {
            console.log(error);
            toast.error("Error al eliminar usuario. Por favor, intenta nuevamente.");
        }
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
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.role?.name || "N/A"}</td> {/* Mostrar el nombre del rol */}
                                    <td>
                                        <button className="boton custom-class manual-padding" onClick={() => handleEdit(user)}>Edit</button>
                                    </td>
                                    <td>
                                        <button className="boton custom-class manual-padding" onClick={() => handleDelete(user.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {isEditing && currentUser && (
                <div className="modal-over">
                    <div className="modal">
                        <button className="close-modal" onClick={() => setIsEditing(false)}>✖</button>
                        <h3 className='titleModal-Listuser'>EDIT USER</h3>
                        <form>
                            <div className="modalForm-row">
                                <label>
                                    Name:
                                    <input
                                        type="text"
                                        name="name"
                                        value={currentUser.name}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
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
                                    Phone:
                                    <input
                                        type="text"
                                        name="phone"
                                        value={currentUser.phone}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            <div className="modalForm-row">
                                <label>
                                    Role:
                                    <select
                                        name="roleId"
                                        value={currentUser.roleId || ""}
                                        onChange={(e) =>
                                            setCurrentUser((prevUser) => ({
                                                ...prevUser,
                                                roleId: parseInt(e.target.value, 10),
                                            }))
                                        }
                                    >
                                        <option value="1">ADMIN</option>
                                        <option value="2">USER</option>
                                        <option value="3">BARBER</option>
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
            <Toaster reverseOrder={false} position="top-center" containerStyle={{ marginTop: "90px" }} />
        </div>
    );
}
