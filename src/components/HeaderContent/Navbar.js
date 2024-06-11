export default function Navbar(props) {
  const ul = {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    display: "flex", // Use flexbox for layout
    justifyContent: "center", // Center align items horizontally
  };
  const li = { margin: "0 20px" }; // Adjust margin for spacing

  const button = {
    background: "none",
    color: "inherit",
    border: "none",
    padding: 0,
    font: "inherit",
    cursor: "pointer",
    outline: "inherit",
  };

  const style = { fontSize: "16px" };

  return (
    <>
      <div style={style}>
        <nav>
          <ul style={ul}>
            <li style={li}>
              <a href="/" className="links">
                <button style={button}>Home</button>
              </a>
            </li>
            <li style={li}>
              <a href="/men" className="links">
                <button style={button}>Men</button>
              </a>
            </li>
            <li style={li}>
              <a href="/women" className="links">
                <button style={button}>Women</button>
              </a>
            </li>
            <li style={li}>
              <a href="/kids" className="links">
                <button style={button}>Kids</button>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
