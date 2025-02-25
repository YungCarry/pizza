import { Container, Button, Toast, ToastContainer } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import CustomNavbar from '../components/Navbar';
import { useState } from 'react';
import axios from 'axios';

const PostPizza = () => {
    const [nev, setNev] = useState('');
    const [leiras, setLeiras] = useState('');
    const [ar, setAr] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [showToast, setShowToast] = useState(false);

    const newPizza = {
        nev: nev,
        leiras: leiras,
        ar: Number(ar),
        imageUrl: imageUrl,
    };

    const handleSubmit = () => {
        axios
            .post('/pizzak', newPizza)
            .then((response) => {
                switch (response.status) {
                    case 201:
                        alert('Sikeresen hozzáadva a pizza!');
                        setShowToast(true);
                        break;
                    default:
                        alert('Hiba a pizza hozzáadásakor!');
                        break;
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <>
            <CustomNavbar />
            <Container className="mt-4">
                <h1 className="text-center">Pizza Hozzáadása</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Név</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Pizza neve"
                            value={nev}
                            onChange={(e) => setNev(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formLeiras" className="mb-3">
                        <Form.Label>Leírás</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Pizza leírása"
                            value={leiras}
                            onChange={(e) => setLeiras(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formAr" className="mb-3">
                        <Form.Label>Ár</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Pizza ára"
                            value={ar}
                            onChange={(e) => setAr(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formImageUrl" className="mb-3">
                        <Form.Label>Kép URL</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Kép URL"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Button variant="dark" type="submit">
                        Hozzáadás
                    </Button>
                </Form>
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
                    <Toast.Body>Termék sikeressen hozzáadv</Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    );
};

export default PostPizza;
