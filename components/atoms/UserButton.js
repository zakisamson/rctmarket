import { useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";

export default function UserButton({ ...buttonProps }) {
  const [name, setName] = useState("");

  useEffect(() => {
    let user = localStorage.getItem("userdata");
    user = JSON.parse(user);
    setName(user[0].username);
  });

  return (
    <DropdownButton
      id="dropdown-basic-button"
      title={name}
      id="login-regis-btn"
    >
      <Dropdown.Item href="/">Cart</Dropdown.Item>
      <Dropdown.Item href="/">Transaction</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="/">Product Management</Dropdown.Item>
      <Dropdown.Item href="/">Transaction Management</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="/">Logout</Dropdown.Item>
    </DropdownButton>
  );
}
