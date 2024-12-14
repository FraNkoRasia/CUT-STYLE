import React, { useState } from 'react';
import '../BarberShop/BarberShop.css'; // Importa estilos comunes
import '../AdminDashboard/List.css'; // Importa los estilos para la lista de usuarios

export default function ListBarber() {
    const [datos, setDatos] = useState([
        { id: 1, name: 'Juan Pérez', email: 'Barbería@gmail.com', phone: '154111555', role: 'BARBER' },
        { id: 2, name: 'Facundo Pérez', email: 'Styl@gmail.com', phone: '155222000', role: 'BARBER' }
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
            <h2>LIST OF BARBERS</h2>
            {/* Contenedor con barra de desplazamiento horizontal */}
            <div className="table-container">
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

            {/* Modal de edición */}
            {isEditing && (
                <div className="modal-over">
                    <div className="modal">
                        <button className="close-modal" onClick={() => setIsEditing(false)}>✖</button>
                        <h3 className="titleModal-Listuser">EDIT BARBER</h3>
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

// CREAR EL CRUD DE BARBEROS EN EL BACKEND

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../BarberShop/BarberShop.css'; // Reutilizando estilos
// import '../AdminDashboard/List.css';
// import toast, { Toaster } from "react-hot-toast";

// export default function ListBarbers() {
//     const [isEditing, setIsEditing] = useState(false);
//     const [currentBarber, setCurrentBarber] = useState(null);
//     const [barbers, setBarbers] = useState([]);

//     const token = sessionStorage.getItem("token");

//     useEffect(() => {
//         const fetchBarbers = async () => {
//             if (!token) {
//                 toast.error("No se encontró el token. Por favor, inicia sesión.");
//                 return;
//             }

//             try {
//                 const response = await axios.get(
//                     `${import.meta.env.VITE_API_URL}/api/v1/barbers`,
//                     {
//                         headers: {
//                             Authorization: `Bearer ${token}`,
//                         },
//                     }
//                 );
//                 setBarbers(response.data);
//             } catch (error) {
//                 console.log(error);
//                 toast.error("Error al buscar barberos. Por favor, intenta nuevamente.");
//             }
//         };
//         fetchBarbers();
//     }, [token]);

//     const handleEdit = (barber) => {
//         setCurrentBarber({ ...barber }); // Copia del barbero actual
//         setIsEditing(true);
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setCurrentBarber((prevBarber) => ({ ...prevBarber, [name]: value }));
//     };

//     const handleSave = async () => {
//         if (!currentBarber) return;

//         const updatedData = {
//             name: currentBarber.name,
//             email: currentBarber.email,
//             phone: currentBarber.phone,
//             lastname: currentBarber.lastname,
//             roleId: currentBarber.roleId, // Usando roleId
//             ...(currentBarber.password && { password: currentBarber.password }), // Solo enviar si hay un cambio de contraseña
//         };

//         try {
//             const response = await axios.put(
//                 `${import.meta.env.VITE_API_URL}/api/v1/barbers/${currentBarber.id}`,
//                 updatedData,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );

//             // Actualiza el estado de barbers con los datos actualizados
//             setBarbers((prevBarbers) =>
//                 prevBarbers.map((barber) =>
//                     barber.id === response.data.id
//                         ? { ...barber, ...response.data, role: { name: getRoleName(response.data.roleId) } }
//                         : barber
//                 )
//             );

//             setIsEditing(false);
//             toast.success("Barbero actualizado correctamente.");
//         } catch (error) {
//             console.error(error);
//             toast.error("Error al actualizar barbero. Por favor, intenta nuevamente.");
//         }
//     };

//     const handleDelete = async (id) => {
//         try {
//             await axios.delete(
//                 `${import.meta.env.VITE_API_URL}/api/v1/barbers/${id}`,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );
//             setBarbers(barbers.filter((barber) => barber.id !== id));
//             toast.success("Barbero eliminado exitosamente.");
//         } catch (error) {
//             console.log(error);
//             toast.error("Error al eliminar barbero. Por favor, intenta nuevamente.");
//         }
//     };

//     const getRoleName = (roleId) => {
//         const roles = {
//             1: "ADMIN",
//             2: "USER",
//             3: "BARBER",
//         };
//         return roles[roleId] || "N/A";
//     };

//     return (
//         <div className="turno-container">
//             <h2>BARBER LIST</h2>
//             <div className="table-container">
//                 <div className="table-scroll-container">
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>Name</th>
//                                 <th>Email</th>
//                                 <th>Phone</th>
//                                 <th>Role</th>
//                                 <th>Edit</th>
//                                 <th>Delete</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {barbers.map((barber) => (
//                                 <tr key={barber.id}>
//                                     <td>{barber.name}</td>
//                                     <td>{barber.email}</td>
//                                     <td>{barber.phone}</td>
//                                     <td>{barber.role?.name || "N/A"}</td>
//                                     <td>
//                                         <button className="boton custom-class manual-padding" onClick={() => handleEdit(barber)}>Edit</button>
//                                     </td>
//                                     <td>
//                                         <button className="boton custom-class manual-padding" onClick={() => handleDelete(barber.id)}>Delete</button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>

//             {isEditing && currentBarber && (
//                 <div className="modal-over">
//                     <div className="modal">
//                         <button className="close-modal" onClick={() => setIsEditing(false)}>✖</button>
//                         <h3 className='titleModal-Listuser'>EDIT BARBER</h3>
//                         <form>
//                             <div className="modalForm-row">
//                                 <label>
//                                     Name:
//                                     <input
//                                         type="text"
//                                         name="name"
//                                         value={currentBarber.name}
//                                         onChange={handleChange}
//                                     />
//                                 </label>
//                             </div>
//                             <div className="modalForm-row">
//                                 <label>
//                                     Email:
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         value={currentBarber.email}
//                                         onChange={handleChange}
//                                     />
//                                 </label>
//                             </div>
//                             <div className="modalForm-row">
//                                 <label>
//                                     Phone:
//                                     <input
//                                         type="text"
//                                         name="phone"
//                                         value={currentBarber.phone}
//                                         onChange={handleChange}
//                                     />
//                                 </label>
//                             </div>
//                             <div className="modalForm-row">
//                                 <label>
//                                     Role:
//                                     <select
//                                         name="role"
//                                         value={currentBarber.role?.name || ""}
//                                         onChange={(e) =>
//                                             setCurrentBarber((prevBarber) => ({
//                                                 ...prevBarber,
//                                                 role: { ...prevBarber.role, name: e.target.value },
//                                             }))
//                                         }
//                                     >
//                                         <option value="ADMIN">ADMIN</option>
//                                         <option value="USER">USER</option>
//                                         <option value="BARBER">BARBER</option>
//                                     </select>
//                                 </label>
//                             </div>
//                             <div className="modal-buttons btnModal-userlist">
//                                 <button type="button" className="boton custom-class" onClick={handleSave}>Save</button>
//                                 <button type="button" className="boton custom-class" onClick={() => setIsEditing(false)}>Cancel</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             )}
//             <Toaster reverseOrder={false} position="top-center" containerStyle={{ marginTop: "90px" }} />
//         </div>
//     );
// }
