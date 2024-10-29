import React from 'react'

export default function ListBarber() {
    const datos = [
        { name: 'Juan Pérez', email: 'Barbercccccccccccccccccccccía@gmail.com', phone: '154111555', role: 'BARBER' },
        { name: 'Facundo Pérez', email: 'Styl@gmail.com', phone: '155222000', role: 'BARBER' }
    ];

    return (
        <div className="turno-container">
            <h2>LIST OF BARBERS</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {datos.map((turno, index) => (
                        <tr key={index}>
                            <td>{turno.name}</td>
                            <td>{turno.email}</td>
                            <td>{turno.phone}</td>
                            <td>{turno.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
