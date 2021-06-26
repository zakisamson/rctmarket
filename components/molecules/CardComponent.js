import { Image, Card } from "react-bootstrap";
import DetailButton from "../atoms/DetailButton";

export default function CardComponent({ source, category, name, price }) {
  return (
    <Card
      style={{
        minWidth: "295px",
        border: "0.5px solid #008c8c",
        marginInline: "15px",
      }}
      id="card-cmp"
    >
      <Card.Img
        variant="top"
        src={source}
        style={{
          width: "293px",
          height: "293px",
        }}
      />
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          color: "#005858",
        }}
      >
        <div style={{ flex: "0.6" }}>
          <Card.Text
            style={{
              marginBottom: "0px",
              fontSize: "13px",
              letterSpacing: "1px",
            }}
          >
            {category}
          </Card.Text>
          <Card.Text
            style={{
              fontWeight: "700",
              fontSize: "25px",
              marginBlock: "3px",
              minHeight: "111px",
            }}
          >
            {name}
          </Card.Text>
        </div>
        <Card.Text
          style={{ fontWeight: "600", overflowX: "auto", flex: "0.4" }}
        >
          Rp. {price}
        </Card.Text>
        <DetailButton />
      </Card.Body>
    </Card>
  );
}
