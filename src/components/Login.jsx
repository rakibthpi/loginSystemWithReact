import React, { useContext } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { AuthContext } from '../contexts/UseContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { singinUser } = useContext(AuthContext);
    const navigate = useNavigate()
    const loginHandleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log("Email", email, "Password", password)
        singinUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate("/");
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form onSubmit={loginHandleSubmit} className='form_text py-5'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button className='bg-primary' type="submit">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default Login;