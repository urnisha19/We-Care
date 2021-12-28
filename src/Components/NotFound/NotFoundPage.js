import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    const notMatchStyle = {
        color: '#EA6077',
        textAlign: 'center',
        margin: '0 auto',
        marginTop: '5%',
        padding: '10%',
        boxShadow: '0 0 15px 15px lightGray',
        width: '40%',
        borderRadius: '5px'
    }

    return (
        <div>
            <div style={notMatchStyle}>
                <h2>404 Error!!!</h2>
                <h2>Route Not Found!!!</h2>
                <Link to="/home">
                    <Button className="mt-5 text-center" style={{ backgroundColor: "#EA6077", border: "none", fontWeight: "500" }}>Go Back</Button>
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;