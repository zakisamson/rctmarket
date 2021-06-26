import { Button } from "react-bootstrap";
import { BiChevronsRight } from "react-icons/bi";

export default function DetailButton({ ...buttonProps }) {
  return (
    <Button id="invert-clr-btn">
      <p style={{ margin: "0" }}>
        Detail <BiChevronsRight size="16px" />
      </p>
    </Button>
  );
}
