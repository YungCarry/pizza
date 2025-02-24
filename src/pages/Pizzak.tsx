import { useEffect, useState } from 'react';
import { Pizza } from '../types/Pizza';
import apiClient from '../apiClient/apiClient';
import Card from 'react-bootstrap/Card';
import { Button, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import './Pizzak.css';

const Pizzak = () => {
    const [data, setData] = useState<Array<Pizza>>([]);

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
                                    <Button variant="dark">Kosárba</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Pizzak;
