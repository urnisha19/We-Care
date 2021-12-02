import React from 'react';
import NavBar from './../MultiSharedComponents/NavBar/NavBar';

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
            <NavBar></NavBar>
            <div style={notMatchStyle}>
                <h2>404 Error!!!</h2>
                <h2>Route Not Found!!!</h2>
            </div>
        </div>
    );
};

export default NotFoundPage;