import React from 'react';

const AllAppointmentDetails = ({ appointment }) => {

    return (
        <tr>
            <td>{appointment.name}</td>
            <td>{appointment.email}</td>
            <td>{appointment.therapy}</td>
        </tr>
    );
};

export default AllAppointmentDetails;