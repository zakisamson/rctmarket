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
    if (username === "" || password === "") {
      alert("Username / Email & Password tidak boleh kosong");
    } else {
      axios
        .get(
          API +
            `/users?username=${username}|email=${username}&password=${password}`
        )
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("userdata", JSON.stringify(res.data));
          handleClose();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <Button onClick={handleShow} id="login-regis-btn">
        Login
      </Button>

      <Modal show={show} onHide={handleClose} id="modal">
        <Modal.Header style={{ backgroundColor: "#008c8c", color: "#ffd651" }}>
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
            Forgot Password
          </a>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#008c8c", color: "#ffd651" }}>
          <Button onClick={handleLogin} id="login-regis-btn">
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
