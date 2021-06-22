import { Dropdown, DropdownButton } from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";

export default function UserButton({...buttonProps}) {
  return (
    <DropdownButton id="dropdown-basic-button" title="User">
      <Dropdown.Item href="#/action-1">Cart</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Transaction</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#/action-3">Product Management</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Transaction Management</Dropdown.Item>
    </DropdownButton>
  );
}
