import logo from './logo.png';
import './common.css';
import { Button, Modal, Form } from 'react-bootstrap';
import { useState } from 'react';

function Header() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <header>
                <img src={logo} />
                <h2>The Joeun</h2>
                <div className="login">
                    <Button variant="outline-secondary" size="sm">회원가입</Button>&emsp;
                    <Button variant="outline-success" size="sm" onClick={handleShow}>로 그 인</Button>
                </div>
                <Login show={show} />
            </header>
        </>
    )

    function Login() {
        return (
            <>
                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>ID</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>PW</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Login
                    </Button>
                </Modal.Footer>
            </Modal>
            </>
        )
    }
}
export default Header;
