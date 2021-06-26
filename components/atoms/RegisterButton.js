import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import axios from "axios";
import { API } from "../../pages/api/Helper";
import { useState } from "react";
import { Button, Modal, Form, Image } from "react-bootstrap";
import { validEmail, validPassword } from "../../Regex";

export default function RegisterButton() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfpassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const validate = () => {
    // if (!validEmail.test(email)) {
    //   setEmailErr(true);
    // }
    // if (!validPassword.test(password)) {
    //   setPwdError(true);
    // }
    if (
      email === "" ||
      username === "" ||
      password === "" ||
      confpassword === ""
    ) {
      alert("No form can be empty");
    } else {
      if (validEmail.test(email)) {
        if (validPassword.test(password)) {
          if (password === confpassword) {
            axios
              .post(API + `/users`, {
                username,
                email,
                password,
                role: "user",
                cart: [],
                phone: "",
              })
              .then((response) => {
                console.log("Register Success", response.data);
                handleClose();
              })
              .catch((error) => {
                console.log(error);
              });
          } else {
            alert("Password doesn't match");
          }
        } else {
          alert("Password is not valid");
        }
      } else {
        alert("Email is not valid");
      }
    }
  };

  return (
    <>
      <Button onClick={handleShow} id="login-regis-btn">
        Register
      </Button>

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
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailErr && <p>Your email is invalid</p>}
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
                onChange={(e) => setUsername(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Text className="text-muted">
                Password has to contain an uppercase letter, a number, and
                atleast 6 characters long
              </Form.Text>
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
                onChange={(e) => setConfpassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#008c8c", color: "#ffd651" }}>
          <Button id="login-regis-btn" onClick={validate}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
