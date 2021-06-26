import { Button } from "react-bootstrap";

export default function AddToCartButton({ ...buttonProps }) {
  return (
    <Button id="invert-clr-btn" style={{ marginBottom: "15px" }}>
      Add To Cart
    </Button>
  );
}
