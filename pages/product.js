import { Container, Row, Col, Image, Form } from "react-bootstrap";
import AddToCartButton from "../components/atoms/AddToCartButton";

export default function Product() {
  return (
    <Container fluid>
      <Container style={{ marginTop: "100px", color: "#005858" }}>
        <Row>
          <Col lg={5}>
            <Image src="/vectors/Login.png" style={{ width: "100%" }} />
          </Col>
          <Col lg={4} style={{ paddingInline: "15px", marginBlock: "15px" }}>
            <p
              style={{
                marginBottom: "10px",
                fontWeight: "300",
                letterSpacing: "1px",
              }}
            >
              shoes
            </p>
            <h1 style={{ fontWeight: "700" }}>Nike Air Max</h1>
            <h5 style={{ fontWeight: "600" }}>Rp. 1.500.000</h5>
            <p style={{ marginBlock: "30px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <h4 style={{ fontSize: "20px" }}>Color:</h4>
          </Col>
          <Col
            lg={3}
            style={{ border: "0.5px solid #008C8C", borderRadius: "5px" }}
          >
            <Form>
              <h4 style={{ fontSize: "20px", marginTop: "15px" }}>Size</h4>
              <select
                style={{
                  width: "41%",
                  border: "0.5px solid #008C8C",
                  padding: "5px",
                  borderRadius: "5px",
                }}
              >
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">30</option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
                <option value="44">45</option>
              </select>
              <p style={{ marginTop: "5px" }}>Stock: </p>
              <h4 style={{ fontSize: "20px" }}>Shipping Info</h4>
              <Form.Group className="mb-3" controlId="address">
                <Form.Control
                  as="textarea"
                  placeholder="Address"
                  rows={3}
                  style={{ border: "0.5px solid #008C8C" }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="country">
                <Form.Control
                  type="text"
                  placeholder="Country"
                  style={{ border: "0.5px solid #008C8C" }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="number">
                <Form.Control
                  type="text"
                  placeholder="Phone Number"
                  style={{ border: "0.5px solid #008C8C" }}
                />
              </Form.Group>
              <Row style={{ marginBottom: "15px" }}>
                <Col>Quantity</Col>
                <Col>-</Col>
                <Col>10</Col>
                <Col>+</Col>
              </Row>
              <AddToCartButton />
              <h4 style={{ fontSize: "20px" }}>Share</h4>
              <Row style={{ marginBottom: "15px" }}>
                <Col>Facebook</Col>
                <Col>Twitter</Col>
                <Col>Insta</Col>
                <Col>Link</Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
