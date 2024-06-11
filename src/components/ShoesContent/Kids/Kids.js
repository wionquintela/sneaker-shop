import KidsShoeList from "./ShoeList";
import ShoeCard from "../ShoeCard";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
export default function Kids(props) {
  const kidsShoes = KidsShoeList.map((item) => {
    return (
      <Col className="mb-4">
        <ShoeCard {...item} key={item.id} />
      </Col>
    );
  });
  return (
    <>
      <section className="ContentSection">
        <h1 className="shopHeaderTitle text-center ContentTitle">
          Kid's Apparel
        </h1>
        <div style={{ marginTop: "40px" }}>
          <Row className="justify-content-center " lg={4} sm={2} xs={1}>
            {kidsShoes}
          </Row>
        </div>
      </section>
    </>
  );
}
