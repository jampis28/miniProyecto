import "./Card.css";

function Card(props) {
  return (
    <>
      <div className="card border-0">
        <img src={props.imag} className="card-img-top" alt="..." />
        <div className="card-body">
          <div id="tipos">
            <p id={props.Host ? "active" : ""} className="card-text">
              {props.Host ? "SUPERHOST" : <span id="tipos2">{props.tipo} . {props.invitado} beds</span>}
            </p>
            {props.Host ? (
              <>
                <span id="tipos2">
                  {props.tipo} . {props.invitado} beds
                </span>
                <div id="rating">
                  <span className="material-symbols-outlined">grade</span>
                  <span id="rating3">{props.rating} </span>
                </div>
              </>
            ) : (
              <>
                <div id="rating2">
                <span className="material-symbols-outlined">grade</span>
                  <span id="rating3">{props.rating}</span>
                </div>
              </>
            )}
          </div>

          <h5 className="card-title">{props.titulo}</h5>
        </div>
      </div>
    </>
  );
}

export default Card;
