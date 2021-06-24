import { Image, Card } from "react-bootstrap";
import DetailButton from "../atoms/DetailButton";

export default function CardComponent({ source, category, name, price }) {
  return (
    <Card style={{ width: "295px", border: "none" }} id="card-cmp">
      <Card.Img
        variant="top"
        src={source}
        style={{ width: "295px", height: "220px" }}
      />
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          color: "#ffd651",
        }}
      >
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
          style={{ fontWeight: "700", fontSize: "25px", marginBlock: "3px" }}
        >
          {name}
        </Card.Text>
        <Card.Text style={{ fontWeight: "600" }}>{price}</Card.Text>
        <DetailButton />
      </Card.Body>
    </Card>
  );
}
