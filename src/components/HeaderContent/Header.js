import Navbar from "./Navbar";

export default function Header(props) {
  const style = { paddingTop: "20px" };
  return (
    <>
      <div style={{ backgroundColor: "#2c224a" }}>
        {" "}
        <marquee style={{ color: "#c3e3cb" }}>
          SUMMER SALE. <strong>MIDYEAR SALE</strong>. SUMMER SALE.{" "}
          <strong>MIDYEAR SALE</strong>. SUMMER SALE.{" "}
          <strong>MIDYEAR SALE</strong>. SUMMER SALE.{" "}
          <strong>MIDYEAR SALE</strong>. SUMMER SALE.{" "}
          <strong>MIDYEAR SALE</strong>.
        </marquee>
      </div>
      <section style={style} className="HeaderSection shadow">
        <div className="text-center">
          <h1 className="shopHeaderTitle">Wizzy Sneakers</h1>
          <p>A Nike Inspired Ecommerce Store</p>
          <Navbar NavbarClicked={props.NavbarClicked} />
        </div>
      </section>
    </>
  );
}
