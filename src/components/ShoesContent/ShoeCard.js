export default function ShoeCard(props) {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center m-1">
        {" "}
        <div class="card " style={{ maxWidth: "1000px", height: "600px" }}>
          <img
            src={props.image}
            class="card-img-top"
            alt="..."
            style={{ maxWidth: "500px" }}
          />
          <div class="card-body">
            <h5 class="card-title">{props.price}</h5>
            <h5 class="card-title display-6">{props.title}</h5>
            <p class="card-text" style={{ height: "100px" }}>
              {props.desc}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
