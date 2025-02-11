import { useEffect, useState } from 'react';
import { Pizza } from '../types/Pizza';
import apiClient from '../apiClient/apiClient';
import Card from 'react-bootstrap/Card';
import { CardGroup, Col, Row } from 'react-bootstrap';

const Pizzak = () => {
    const [data, setData] = useState(Array<Pizza>);

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
        <div>
            <h1>Pizzáink</h1>
            <Row xs={1} md={3} className="g-2">
                {data.map((p) => (
                    <Col key={p.id.toString()}>
                        <Card bg="dark" style={{ width: '18rem' }}>
                            <Card.Img
                                variant="top"
                                src={'http://localhost:8001/api/kepek/' + p.imageUrl}
                                style={{ width: '300px', height: '300px' }}
                            />
                            <Card.Body>
                                <Card.Title>{p.nev}</Card.Title>
                                <Card.Text>{p.leiras}</Card.Text>
                                <Card.Text>{p.ar.toString()} Ft</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Pizzak;
