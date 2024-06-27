export default function ShoeCard(props) {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center m-1 shoes">
        <div className="card" style={{ maxWidth: "100%", height: "auto" }}>
          <img
            src={props.image}
            className="card-img-top"
            alt={props.title}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title">{props.price}</h5>
            <h5 className="card-title cardTitle">{props.title}</h5>
            <p
              className="card-text"
              style={{ maxHeight: "150px", overflowY: "auto" }}
            >
              {props.desc}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
