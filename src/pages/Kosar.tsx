import React, { useState, useEffect, useRef } from 'react';
import { Pizza } from '../types/Pizza';
import CustomNavbar from '../components/Navbar';
import { Container, Table, Row, Col, Button } from 'react-bootstrap';
import { Bounce, ToastContainer, toast } from 'react-toastify';

const Kosar = () => {
    const [kosar, setKosar] = useState<Pizza[]>([]);
    const quantity = useRef(0);

    useEffect(() => {
        const savedKosar = localStorage.getItem('kosar');
        if (savedKosar) {
            setKosar(JSON.parse(savedKosar));
        }
    }, []);

    const vegosszeg = kosar.reduce((total, item) => total + Number(item.ar), 0);

    const emptyCart = () => {
        localStorage.clear();

        window.location.reload();
        toast.success('Kosár sikeressen űrítve', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
            transition: Bounce,
        });
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
                                        <th>Törlés</th>
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
                                            <td></td>
                                            <td>
                                                <Button variant="danger">Törlés</Button>
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
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </div>
    );
};

export default Kosar;
