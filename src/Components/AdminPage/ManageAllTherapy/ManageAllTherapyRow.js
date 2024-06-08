import React from 'react';
import { Link } from 'react-router-dom';
import DeleteTherapy from './DeleteTherapy';

const ManageAllTherapyRow = ({ therapy }) => {
    return (
        <tr>
            <th>{therapy?.title}</th>
            <td>
                <Link className="btn btn-info" to={`/admin/editTherapy/${therapy?._id}`}>
                    Edit
                </Link>

            </td>
            <td>
                <DeleteTherapy therapyId={therapy?._id} />
            </td>
        </tr>
    );
};

export default ManageAllTherapyRow;