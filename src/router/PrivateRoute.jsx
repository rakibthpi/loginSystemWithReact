import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UseContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loding } = useContext(AuthContext);

    if (loding) {
        return <div>Loading...</div>
    }

    if (user && user.uid) {
        return children;
    }
    return <Navigate to="/login"></Navigate>

};

export default PrivateRoute;