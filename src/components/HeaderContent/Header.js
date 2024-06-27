import Navbar from "./Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export default function Header(props) {
  const style = { paddingTop: "20px" };
  return (
    <>
      <div style={{ backgroundColor: "#2c224a" }}> </div>
      <section style={style} className="HeaderSection shadow">
        <div className="text-center">
          <h1 className="shopHeaderTitle">Wizzy Sneakers</h1>
          {/* <p>A Nike Inspired Ecommerce Store</p> */}
        </div>
        <div style={{ paddingTop: "15px" }}>
          <Navbar NavbarClicked={props.NavbarClicked} />
        </div>
      </section>
    </>
  );
}
