import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Button, Modal, Form, Image } from "react-bootstrap";
import { useState } from "react";
import { API } from "../../pages/api/Helper";

export default function LoginButton() {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
      axios.get(API + `/users`)
  };

  return (
    <>
      <Button
        onClick={handleShow}
        style={{
          backgroundColor: "transparent",
          color: "blue",
          borderRadius: "10px",
          margin: "5px",
        }}
      >
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image
            src="/vectors/Login.png"
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
                onChange={handleUsername}
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
                onChange={handlePassword}
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
          <Button onClick={handleClose} style={{ paddingInline: "25px" }}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
