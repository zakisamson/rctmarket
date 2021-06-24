import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { API } from "../../pages/api/Helper";
import { useState } from "react";
import { Button, Modal, Form, Image } from "react-bootstrap";

export default function RegisterButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} id="login-regis-btn">
        Register
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image
            src="/vectors/SignUp.png"
            fluid
            style={{
              height: "auto",
              width: "auto",
              marginBlock: "20px",
            }}
          ></Image>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="formBasicEmail"
              style={{ marginBottom: "1.25rem" }}
            >
              <Form.Label style={{ fontWeight: "600", fontSize: "1rem" }}>
                Email / Username
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                // onChange={handleUsername}
                style={{ borderRadius: "10px" }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicPassword"
              style={{ marginBottom: "1.25rem" }}
            >
              <Form.Label
                style={{
                  fontWeight: "600",
                  fontSize: "1rem",
                }}
              >
                Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                // onChange={handlePassword}
                style={{ borderRadius: "10px" }}
              />
            </Form.Group>
          </Form>
          <a
            href="/"
            style={{
              textDecoration: "none",
              fontSize: "14px",
              justifyContent: "center",
              flex: "1",
              alignItems: "center",
            }}
          >
            Lupa Password
          </a>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ paddingInline: "25px" }}>Login</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
