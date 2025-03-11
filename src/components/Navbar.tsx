import { Container, Nav, Navbar } from 'react-bootstrap';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const CustomNavbar = () => {
    const logout = () => {
        if (sessionStorage.getItem('userName') == null) {
            sessionStorage.clear();
            toast.success('Sikeres kijelentkezés');
        }
    };

    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Pizzéria</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Pizzáink</Nav.Link>
                        <Nav.Link href="/postpizza">Pizza Hozzáadása</Nav.Link>
                        <Nav.Link href="/rendelesek">Rendelések</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link href="/basket">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24px"
                                height="24px"
                            >
                                <path
                                    fill="currentColor"
                                    d="M22 9h-4.79l-4.38-6.56c-.19-.28-.51-.42-.83-.42s-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1c0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1M12 4.8L14.8 9H9.2zM18.5 19l-12.99.01L3.31 11H20.7zM12 13c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"
                                />
                            </svg>
                        </Nav.Link>
                        <Nav.Link href="/login">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#000000"
                                height="24px"
                                width="24px"
                                version="1.1"
                                id="Layer_1"
                                viewBox="0 0 296.999 296.999"
                            >
                                <g>
                                    <g>
                                        <g>
                                            <path
                                                fill="currentColor"
                                                d="M146.603,0c-31.527,0-61.649,9.762-87.11,28.232c-4.377,3.176-5.567,9.188-2.73,13.791l23.329,37.845     c1.509,2.449,3.971,4.158,6.793,4.716c2.82,0.559,5.748-0.084,8.077-1.773c13.897-10.081,30.343-15.41,47.56-15.41     c44.718,0,81.098,36.38,81.098,81.098c0,44.718-36.38,81.098-81.098,81.098c-17.217,0-33.663-5.329-47.56-15.41     c-2.329-1.689-5.255-2.331-8.077-1.773c-2.821,0.558-5.283,2.267-6.793,4.716l-23.329,37.846     c-2.838,4.603-1.647,10.615,2.73,13.791c25.46,18.47,55.583,28.232,87.11,28.232c81.883,0,148.5-66.617,148.5-148.5     S228.486,0,146.603,0z M146.603,276.326c-23.925,0-46.906-6.529-67.024-18.965l12.579-20.407     c15.288,8.741,32.497,13.317,50.364,13.317c56.117,0,101.771-45.655,101.771-101.771c0-56.116-45.655-101.771-101.771-101.771     c-17.866,0-35.076,4.576-50.364,13.317L79.579,39.638c20.117-12.435,43.099-18.965,67.024-18.965     c70.483,0,127.826,57.343,127.826,127.826S217.087,276.326,146.603,276.326z"
                                            />
                                            <path
                                                fill="currentColor"
                                                d="M105.966,193.934c-2.115,3.172-2.312,7.25-0.513,10.611c1.799,3.36,5.302,5.459,9.113,5.459h45.482     c3.456,0,6.684-1.727,8.601-4.603l34.112-51.167c2.315-3.472,2.315-7.996,0-11.467L168.65,91.599     c-1.917-2.876-5.144-4.603-8.601-4.603h-45.482c-3.812,0-7.315,2.099-9.113,5.459c-1.799,3.361-1.602,7.44,0.513,10.611     l12.027,18.041H29.288c-15.104,0-27.393,12.288-27.393,27.393s12.288,27.393,27.393,27.393h88.705L105.966,193.934z      M29.288,155.219c-3.705,0-6.719-3.014-6.719-6.719c0-3.705,3.014-6.719,6.719-6.719h108.02c3.812,0,7.315-2.099,9.113-5.459     c1.799-3.361,1.602-7.44-0.513-10.611l-12.027-18.041h20.635l27.22,40.83l-27.22,40.83h-20.635l12.027-18.041     c2.115-3.172,2.312-7.25,0.513-10.611c-1.799-3.36-5.302-5.459-9.113-5.459H29.288z"
                                            />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </Nav.Link>
                        <Nav.Link onClick={logout}>
                            <svg
                                height="24px"
                                width="24px"
                                version="1.1"
                                id="Capa_1"
                                viewBox="0 0 384.971 384.971"
                            >
                                <g>
                                    <g id="Sign_Out">
                                        <path
                                            fill="currentColor"
                                            d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03    C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03    C192.485,366.299,187.095,360.91,180.455,360.91z"
                                        />
                                        <path
                                            fill="currentColor"
                                            d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279    c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179    c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z"
                                        />
                                    </g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                    <g></g>
                                </g>
                            </svg>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
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
                theme="dark"
                transition={Bounce}
            />
        </div>
    );
};

export default CustomNavbar;
