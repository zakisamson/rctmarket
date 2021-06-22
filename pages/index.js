import LoginButton from "../components/atoms/LoginButton";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loginAction } from "../store/action/userAction";
import UserButton from "../components/atoms/UserButton";
import RegisterButton from "../components/atoms/RegisterButton";
import DetailButton from "../components/atoms/DetailButton";
import CheckoutButton from "../components/atoms/CheckoutButton";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginAction);
  }, []);

  return (
    <div>
      <LoginButton />
      <RegisterButton />
      <UserButton />
      <DetailButton />
      <CheckoutButton />
    </div>
  );
}
