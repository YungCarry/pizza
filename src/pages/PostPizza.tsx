import { Container, Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import CustomNavbar from '../components/Navbar';
import { useState } from 'react';
import axios from 'axios';

const PostPizza = () => {
    const [nev, setNev] = useState('');
    const [leiras, setLeiras] = useState('');
    const [ar, setAr] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const newPizza = {
        nev,
        leiras,
        ar: Number(ar),
        imageUrl,
    };

    const handleSubmit = () => {
        axios
            .post('http://localhost:8001/api/pizzak', newPizza)
            .then((response) => {
                switch (response.status) {
                    case 201:
                        alert('Sikeresen hozzáadva a pizza!');
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
        </>
    );
};

export default PostPizza;
