import { useEffect, useState } from 'react';
import { Pizza } from '../types/Pizza';
import apiClient from '../apiClient/apiClient';
import Card from 'react-bootstrap/Card';
import { Button, Col, Container, Row, Stack, Toast, ToastContainer } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import './Pizzak.css';
import { Link } from 'react-router-dom';

const Pizzak = () => {
    const [data, setData] = useState<Array<Pizza>>([]);
    const [showToast, setShowToast] = useState(false);

    const kosar: Array<Pizza> = [];

    useEffect(() => {
        apiClient
            .get('/pizzak')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="page-container">
            <Navbar />
            <Container className="content-container">
                <h1 className="text-center my-4">Pizzáink</h1>
                <Row xs={1} md={3} lg={4} className="g-4">
                    {data.map((p) => (
                        <Col key={p.id.toString()}>
                            <Card className="h-100 shadow-sm">
                                <Card.Img
                                    variant="top"
                                    src={'http://localhost:8001/api/kepek/' + p.imageUrl}
                                    style={{ width: '100%', height: '100%' }}
                                />
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title className="text-center">{p.nev}</Card.Title>
                                    <Card.Text className="text-muted">{p.leiras}</Card.Text>
                                    <Card.Text className="mt-auto text-center fw-bold">
                                        {p.ar.toString()} Ft
                                    </Card.Text>
                                    <Stack
                                        direction="horizontal"
                                        gap={2}
                                        className="d-flex justify-content-center"
                                    >
                                        <Link to={`pizza/${p.id}`}>
                                            <Button variant="dark">Megtekintés</Button>
                                        </Link>

                                        <Button
                                            variant="primary"
                                            onClick={() => {
                                                kosar.push(p);
                                                localStorage.setItem(
                                                    'kosar',
                                                    JSON.stringify(kosar),
                                                );
                                                //setShowToast(true);
                                            }}
                                        >
                                            Kosárba
                                        </Button>
                                    </Stack>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <ToastContainer position="bottom-end" className="p-3" style={{ zIndex: 1 }}>
                <Toast
                    onClose={() => setShowToast(false)}
                    show={showToast}
                    autohide
                    delay={3000}
                    bg="success"
                    className="text-white"
                >
                    <Toast.Header>
                        <strong className="me-auto">Értesítés</strong>
                        <small>Most</small>
                    </Toast.Header>
                    <Toast.Body>Termék sikeressen hozzáadva a kosaradhoz</Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    );
};

export default Pizzak;
