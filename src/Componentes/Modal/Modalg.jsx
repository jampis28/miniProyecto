import { Modal } from "bootstrap";
import "./Modalg.css";
function Modalg(props) {
  return (
    <>
      <div
        className="modal fade "
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-body">
              <div className="ModalInput">
                <input
                id="municipio"
                  list="Ciudad"
                  type="text"
                  placeholder="Ciudad"
                  aria-label="First name"
                  className="form-control1"
                  onChange={props.fnInputText1}
                  onInput={props.fnInputText}
                />
                <datalist id="Ciudad">
                  <option value="Helsinki" />
                  <option value="Turku" />
                  <option value="Vaasa" />
                  <option value="Oulu" />
                </datalist>
                <input
                id="municipio2"
                  type="number"
                  placeholder="Invitados"
                  aria-label="Last name"
                  className="form-control2"
                  onChange={props.fnInputNum2}
                  onInput={props.fnInputNum}
                />
                <button
                  className="btn btn-outline-success btn btn-danger "
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={props.fnBtn}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modalg;
