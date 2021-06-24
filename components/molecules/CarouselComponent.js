import React, { Component } from "react";
import axios from "axios";
import { API } from "../../pages/api/Helper";
import { Carousel } from "react-bootstrap";

class Carousels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      album: [],
    };
  }

  componentDidMount() {
    this.getAlbumData();
  }

  getAlbumData = () => {
    axios
      .get(API + `/carousel`)
      .then((res) => {
        this.setState({ album: res.data });
        console.log(this.state.album);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <Carousel style={{ height: "50vh", marginTop: "6.5vh" }}>
        {this.state.album.map((value, index) => {
          return (
            <Carousel.Item style={{ height: "50vh", width: "1320px" }}>
              <img src={value.src} alt={index} />
              <Carousel.Caption>
                <h3>{value.header}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  }
}

export default Carousels;
