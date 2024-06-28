import React from "react";
import Carousel from "./Carousel";
import MenShoeList from "../ShoesContent/Men/ShoeList";
import ShoeCard from "../ShoesContent/ShoeCard";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

export default function Home(props) {
  // Function to get a random index within the range of MenShoeList
  // function getRandomIndex(min, max) {
  //   const minCeiled = Math.ceil(min);
  //   const maxFloored = Math.floor(max);
  //   return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  // }

  // Get a random index between 0 and the length of MenShoeList - 1
  // const randomIndex = getRandomIndex(0, MenShoeList.length - 1);
  // Select the random shoe item based on the generated random index
  // const randomShoe = MenShoeList[randomIndex];

  return (
    <>
      <section>
        <Container className="text-center">
          <Row lg={3} md={1} sm={1} xs={1}>
            <Col className="mb-4">
              <a href="/men">
                <Image
                  src="../assets/Men Shoes/air jordan 9g.webp"
                  roundedCircle
                  style={{ width: "300px" }}
                  className="shoes"
                />
              </a>
              <p style={{ padding: "10px" }}>Men Shoes</p>
            </Col>
            <Col className="mb-4">
              <a href="/women">
                <Image
                  src="../assets/Women Shoes/air force 1 shadow.webp"
                  roundedCircle
                  style={{ width: "300px" }}
                  className="shoes"
                />
              </a>

              <p style={{ padding: "10px" }}>Women Shoes</p>
            </Col>
            <Col className="mb-4">
              <a href="/kids">
                {" "}
                <Image
                  src="../assets/Kids Shoes/air jordan legacy 312.webp"
                  roundedCircle
                  style={{ width: "300px" }}
                  className="shoes"
                />
              </a>

              <p style={{ padding: "10px" }}>Kid's Shoes</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
