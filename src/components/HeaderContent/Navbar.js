export default function Navbar(props) {
  const ul = {
    listStyleType: "none",
    margin: 0,
    paddingTop: 0,
    overflow: "hidden",
  };
  const li = { display: "inline", margin: "40px", marginRight: "100px" };

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
