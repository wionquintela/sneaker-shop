export default function Footer(props) {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className={props.className}>
        <h5 style={{ fontWeight: "bold" }} className="footerContentText">
          @ {currentYear} Wion Quintela. All Rights Reserved.
        </h5>
      </div>
    </>
  );
}
