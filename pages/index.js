import axios from "axios";
import { API } from "./api/Helper";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { loginAction } from "../store/action/userAction";
import { Container, Row, Col } from "react-bootstrap";
import CarouselComponent from "../components/molecules/CarouselComponent";
import CardComponent from "../components/molecules/CardComponent";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    this.fetchItems();
  }

  fetchItems = () => {
    axios.get(API + `/products`).then((response) => {
      this.setState({ items: response.data });
      // console.log(this.state.items);
    });
  };

  render() {
    return (
      <Container>
        <CarouselComponent />
        <h4
          style={{
            paddingBlock: "10px",
            color: "#005858",
            marginTop: "25px",
            fontWeight: "700",
          }}
        >
          Popular
        </h4>
        <Container style={{ flexDirection: "row" }}>
          <div
            style={{ display: "flex", maxWidth: "inherit", overflowX: "auto" }}
          >
            {this.state.items.map((value, index) => {
              return (
                <CardComponent
                  key={index}
                  source={value.images[0]}
                  category={value.category}
                  name={value.name}
                  price={value.price}
                />
              );
            })}
          </div>
        </Container>
      </Container>
    );
  }
}

export default Home;
