import React from 'react'

export default function ListHairdresser() {

    const datos = [
        { name: 'LA PELU', address: 'san luis 1123', phone: '154111555', latitude: '-30.548', longitude: '-29.215' },
        { name: 'DON MATEO', address: 'jujuy 787', phone: '155222000', latitude: '-25.548', longitude: '-27.215' }
    ];
    
    return (
        <div className="turno-container">
            <h2>LIST OF HAIRDRESSER</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                    </tr>
                </thead>
                <tbody>
                    {datos.map((turno, index) => (
                        <tr key={index}>
                            <td>{turno.name}</td>
                            <td>{turno.address}</td>
                            <td>{turno.phone}</td>
                            <td>{turno.latitude}</td>
                            <td>{turno.longitude}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
