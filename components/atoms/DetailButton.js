import { Button } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";

export default function DetailButton({...buttonProps}) {
  return (
    <Button>
      Detail <FaAngleRight />
    </Button>
  );
}
