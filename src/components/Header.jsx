import React, { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UseContext';


const Header = () => {
    const { user } = useContext(AuthContext);
    console.log(user.displayName);
    return (
        <div className='header_area  bg-primary'>
            <div className="container">
                <div className='menu_area'>
                    <div className='logo'>
                        <Link>Logo</Link>
                    </div>
                    <Nav className=' menu' defaultActiveKey="/home" as="ul">
                        <Nav.Item as="li">
                            <Link className='text-white' to="/">Home</Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link className='text-white' to="/register">Registration</Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link className='text-white' to="/login">Login</Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link className='text-white' to="/login">LogOut</Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link className='text-white' to="/login">{user?.email}</Link>
                        </Nav.Item>
                    </Nav>
                </div >
            </div>
        </div>
    );
};

export default Header;