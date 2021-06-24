import LoginButton from "../components/atoms/LoginButton";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loginAction } from "../store/action/userAction";
import UserButton from "../components/atoms/UserButton";
import RegisterButton from "../components/atoms/RegisterButton";
import DetailButton from "../components/atoms/DetailButton";
import CheckoutButton from "../components/atoms/CheckoutButton";
import { Container, Row, Col } from "react-bootstrap";
import CarouselComponent from "../components/molecules/CarouselComponent";
import NavbarComponent from "../components/organisms/NavbarComponent";
import CardComponent from "../components/molecules/CardComponent";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginAction);
  }, []);

  return (
    <Container>
      <CarouselComponent />
      <h4 style={{ paddingBlock: "10px", color: "#008c8c", marginTop: "25px" }}>
        Popular
      </h4>
      <CardComponent
        source="/vectors/Login.png"
        category="shoes"
        name="Nike Air Max"
        price="Rp. 1.500.000"
      />
    </Container>
  );
}
