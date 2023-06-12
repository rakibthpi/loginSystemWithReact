import { React, useContext } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { AuthContext } from '../contexts/UseContext';

const Register = () => {

    const { createUser } = useContext(AuthContext);
    console.log(createUser);

    const handleRegister = (event) => {
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const phone = from.phone.value;
        const email = from.email.value;
        const password = from.password.value;
        console.log("Name:", name, "Phone", phone, "Email:", email, "Password:", password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                from.reset();
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div className='form_area'>
            <div className='container'>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={handleRegister} className='form_text py-5'>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" name='name' placeholder="Enter Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPhone">
                                <Form.Label>Your Phone</Form.Label>
                                <Form.Control type="text" name='phone' placeholder="Enter Phone" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name='email' placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name='password' placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        </div >
    );
};

export default Register;