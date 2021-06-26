import { Dropdown, DropdownButton } from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";

export default function UserButton({ username, ...buttonProps }) {
  return (
    <DropdownButton
      id="dropdown-basic-button"
      title={username}
      id="login-regis-btn"
    >
      <Dropdown.Item href="/">Cart</Dropdown.Item>
      <Dropdown.Item href="/">Transaction</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="/">Product Management</Dropdown.Item>
      <Dropdown.Item href="/">Transaction Management</Dropdown.Item>
    </DropdownButton>
  );
}
