import LoginButton from "../components/atoms/LoginButton";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loginAction } from "../store/action/userAction";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginAction);
  }, []);

  return <LoginButton></LoginButton>;
}
