import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
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
      <Button onClick={handleShow} id="login-regis-btn">Register</Button>

      <Modal show={show} onHide={handleClose} id="modal">
        <Modal.Header style={{ backgroundColor: "#008c8c", color: "#ffd651" }}>
          <Modal.Title>Register</Modal.Title>
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
                Email
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                style={{ borderRadius: "10px" }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicUsername"
              style={{ marginBottom: "1.25rem" }}
            >
              <Form.Label style={{ fontWeight: "600", fontSize: "1rem" }}>
                Username
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
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
                style={{ borderRadius: "10px" }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicConfirmPassword"
              style={{ marginBottom: "1.25rem" }}
            >
              <Form.Label
                style={{
                  fontWeight: "600",
                  fontSize: "1rem",
                }}
              >
                Confirm Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Re-type password"
                style={{ borderRadius: "10px" }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#008c8c", color: "#ffd651" }}>
          <Button id="login-regis-btn">Register</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
