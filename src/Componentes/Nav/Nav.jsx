import "./Nav.css";
import { Modal } from "bootstrap";
function Navd(props) {
  return (
    <>
      <nav className="navbar ">
        <div className="container-fluid">
          <a className="navbar-brand">
            <img src={props.imag} alt="..." />
          </a>
          <div className="d-flex">
            <input
            id="municipio_inm"
              type="text"
              placeholder="Ciudad"
              aria-label="First name"
              onClick={props.fnInputText}
              className="form-control"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            ></input>
            <input
            id="municipio_inm2"
              type="number"
              placeholder="Invitados"
              aria-label="Last name"
              className="form-control"
              onChange={props.fnInputNum}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            />
            <button className="btn btn-outline-success" onClick={props.fnBtn}>
              Search
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navd;
