import React, { useEffect, useState } from 'react';
import axios from "axios";
import '../BarberShop/BarberShop.css';
import '../AdminDashboard/List.css';
import toast, { Toaster } from "react-hot-toast";

export default function ListHairdresser() {
    const [hairdressers, setHairdressers] = useState([]);
    const [currentHairdresser, setCurrentHairdresser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const token = sessionStorage.getItem("token");

    useEffect(() => {
        const fetchHairdressers = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/api/v1/barbershops`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setHairdressers(response.data);
            } catch (error) {
                console.log(error);
                toast.error("Error al buscar Peluquería. Por favor, intenta nuevamente.");
            }
        };
        fetchHairdressers();
    }, []);

    const handleEdit = (hairdresser) => {
        setCurrentHairdresser(hairdresser);
        setIsEditing(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentHairdresser({
            ...currentHairdresser,
            [name]: value,
        });
    };

    const handleSave = async () => {
        try {
            const response = await axios.put(
                `${import.meta.env.VITE_API_URL}/api/v1/barbershops/${currentHairdresser.id}`,
                {
                    name: currentHairdresser.name,
                    address: currentHairdresser.address,
                    phone: currentHairdresser.phone,
                    latitude: currentHairdresser.latitude,
                    longitude: currentHairdresser.longitude,
                    img: currentHairdresser.img,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setHairdressers(hairdressers.map(h => h.id === currentHairdresser.id ? currentHairdresser : h));
            setIsEditing(false);
            toast.success("Peluquería actualizada correctamente.");
        } catch (error) {
            console.log(error);
            toast.error("Error al actualizar Peluquería. Por favor, intenta nuevamente.");
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(
                `${import.meta.env.VITE_API_URL}/api/v1/barbershops/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Incluye el token en el encabezado
                    },
                }
            );
            // Filtra la lista de peluqueros para actualizar el estado local después de eliminar
            setHairdressers(hairdressers.filter((hairdresser) => hairdresser.id !== id));
            toast.success("Peluquero eliminado exitosamente.");
        } catch (error) {
            console.log(error);
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(`Error al eliminar Peluquero: ${error.response.data.message}`);
            } else {
                toast.error("Error al eliminar Peluquero. Por favor, intenta nuevamente.");
            }
        }
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
                        {hairdressers.map((hairdresser) => (
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
            {isEditing && currentHairdresser && (
                <div className="modal-over">
                    <div className="modal">
                        <button className="close-modal" onClick={() => setIsEditing(false)}>✖</button>
                        <h3 className="titleModal-Listuser">EDIT HAIRDRESSER</h3>
                        <form>
                            <div className="modalForm-row">
                                <label>
                                    Name:
                                    <input
                                        type="text"
                                        name="name"
                                        value={currentHairdresser.name || ""}
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
                                        value={currentHairdresser.address || ""}
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
                                        value={currentHairdresser.phone || ""}
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
                                        value={currentHairdresser.latitude || ""}
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
                                        value={currentHairdresser.longitude || ""}
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
            <Toaster reverseOrder={false} position="top-center" containerStyle={{ marginTop: "90px" }} />
        </div>
    );
};
