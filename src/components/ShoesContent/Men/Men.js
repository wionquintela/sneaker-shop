import MenShoeList from "./ShoeList";
import ShoeCard from "../ShoeCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Men(props) {
  const menShoes = MenShoeList.map((item) => {
    return (
      <Col className="mb-4">
        <ShoeCard {...item} key={item.id} />
      </Col>
    );
  });
  return (
    <>
      <section className="ContentSection">
        <h1 className="text-center ContentTitle">Men Apparel</h1>
        <div style={{ marginTop: "40px" }}>
          <Row className="justify-content-center " lg={4} sm={2} xs={1}>
            {menShoes}
          </Row>
        </div>
      </section>
    </>
  );
}
