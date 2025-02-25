import React, { useState, useEffect, useRef } from 'react';
import { Pizza } from '../types/Pizza';
import CustomNavbar from '../components/Navbar';
import { Container, Table, Row, Col, Button, ToastContainer, Toast } from 'react-bootstrap';

const Kosar = () => {
    const [kosar, setKosar] = useState<Pizza[]>([]);
    const [showToast, setShowToast] = useState(false);
    const quantity = useRef(0);

    useEffect(() => {
        const savedKosar = localStorage.getItem('kosar');
        if (savedKosar) {
            setKosar(JSON.parse(savedKosar));
        }
    }, []);     

    const vegosszeg = kosar.reduce((total, item) => total + Number(item.ar), 0);

    const emptyCart = () => {
        setKosar([]);
        setShowToast(true);
    };

    return (
        <div>
            <CustomNavbar />
            <Container className="mt-4">
                <h1 className="text-center">Kosár</h1>
                <div className="main">
                    {kosar.length > 0 ? (
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Kép</th>
                                        <th>Név</th>
                                        <th>Ár</th>
                                        <th>Mennyiség</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {kosar.map((item, index) => (
                                        <tr key={index}>
                                            <td>
                                                <img
                                                    alt={item.nev}
                                                    src={`http://localhost:8001/api/kepek/${item.imageUrl}`}
                                                    style={{ width: '100px', height: '100px' }}
                                                />
                                            </td>
                                            <td>{item.nev}</td>
                                            <td>{item.ar.toString()} Ft</td>
                                            <td>
                                                {/*<input ref={quantity} type="number" min="0" />*/}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <Row className="justify-content-end">
                                <Col xs="auto">
                                    <h2>Végösszeg: {vegosszeg} Ft</h2>
                                    <Button variant="dark" onClick={emptyCart}>
                                        Kosár űrítése
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    ) : (
                        <p className="text-center">A kosár üres.</p>
                    )}
                </div>
            </Container>
            <ToastContainer position="bottom-end" className="p-3" style={{ zIndex: 1 }}>
                <Toast
                    onClose={() => setShowToast(false)}
                    show={showToast}
                    delay={10000}
                    autohide
                    bg="dark"
                    className="text-white"
                >
                    <Toast.Header>
                        <strong className="me-auto">Értesítés</strong>
                        <small>Most</small>
                    </Toast.Header>
                    <Toast.Body>A kosár sikeresen kiürítve.</Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    );
};

export default Kosar;
