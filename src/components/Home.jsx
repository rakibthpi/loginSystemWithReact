import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { AuthContext } from '../contexts/UseContext';

const Home = () => {
    // const { user } = useContext();
    // console.log(user.displayName);
    const { user } = useContext(AuthContext)
    return (
        <div>
            <div className='home m-5'>
                <div className="container">
                    <div className="home_text p-5">
                        <Row>
                            <Col md={4}>
                                <Card>
                                    <Card.Img variant="top" src="https://i.postimg.cc/sgMR2g3z/1.jpg" />
                                    <Card.Body>
                                        <Card.Title>Card Title {user?.displayName}</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card>
                                    <Card.Img variant="top" src="https://i.postimg.cc/FHwXkXKL/2.jpg" />
                                    <Card.Body>
                                        <Card.Title>Card Title {user?.displayName}</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card>
                                    <Card.Img variant="top" src="https://i.postimg.cc/pd8bDc91/3.jpg" />
                                    <Card.Body>
                                        <Card.Title>Card Title {user?.displayName}</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;