import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function ShoeCard(props) {
  function showModal(id) {
    setShow(true);
  }

  function buyShoes(e) {
    handleClose();
    alert(
      `Your purchase of ${shoeQuantity}x ${props.title} has been added to your cart!`
    );
  }

  const [show, setShow] = useState(false);
  const [shoeQuantity, setShoeQuantity] = useState(1);

  const handleClose = () => setShow(false);

  return (
    <>
      {/*MODAL*/}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: "70vh", overflowY: "auto" }}>
          <img
            src={props.image}
            alt={props.title}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              marginBottom: "15px",
            }}
          />
          <h5 className="mb-3">Price: {props.price}</h5>
          <p>{props.desc}</p>
          {/* Add any additional details here */}
          <Form.Group controlId="formQuantity" className="mb-3">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              as="select"
              defaultValue={1}
              value={shoeQuantity}
              onChange={(e) => setShoeQuantity(e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              buyShoes();
            }}
          >
            Buy Now
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="d-flex justify-content-center align-items-center m-1 shoes">
        <div
          className="card"
          style={{ maxWidth: "100%", height: "auto" }}
          onClick={() => showModal(props.title)}
        >
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
