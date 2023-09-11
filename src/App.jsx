import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Componentes/Card/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Navd from "./Componentes/Nav/Nav";
import Modalg from "./Componentes/Modal/Modalg";
function App() {
  // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
  const [data, setData] = useState([]);
  const [txtValue, setTxtValue] = useState([
    {
      ciudad: "",
      invitado: 1,
    },
  ]);
  const [txtfiltro, setTxtfiltro] = useState([]);
  const [cambio, setCambio] = useState(true);

  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
    getData();
  }, []);

  function handleinputChange(e) {
    e.preventDefault();
    let InputSearchText = e.target.value;
    setTxtValue({ ...txtValue, ciudad: InputSearchText });
  }
  function handleinput2Change(e) {
    e.preventDefault();
    let InputSearch2Text = e.target.value;
    setTxtValue({ ...txtValue, invitado: InputSearch2Text });
  }
  function handleinputChange1(e) {
    e.preventDefault();
    let municipio = document.getElementById("municipio").value;
    //Se actualiza en municipio inm
    document.getElementById("municipio_inm").value = municipio;
  }
  function handleinput2Change2(e) {
    e.preventDefault();
    let municipio = document.getElementById("municipio2").value;
    //Se actualiza en municipio inm
    document.getElementById("municipio_inm2").value = municipio;
  }
  function handlebtnSearchChange() {
    if (txtValue.invitado == "" && txtValue.ciudad == "") {
      console.log("escriba ciudad y invitado");
      setCambio(true);
    } else {
      setCambio(false);
      setTxtfiltro(
        data.filter((el) => {
          let minuscula = String(el.city).toUpperCase();
          let minuscula2 = String(txtValue.ciudad).toUpperCase();
          let invitados = el.maxGuests;
          let invitados2 = txtValue.invitado;
          if (
            String(minuscula).includes(minuscula2) &&
            invitados >= invitados2
          ) {
            return true;
          }
          return false;
        })
      );
    }
  }
  // Puedes ver la variable data en consola.
  return (
    <>
      <Navd
        imag="./src/img/logo.png"

        fnBtn={handlebtnSearchChange}
      ></Navd>
      <Modalg
        fnInputText1={handleinputChange}
        fnInputNum2={handleinput2Change}
        fnInputText={handleinputChange1}
        fnInputNum={handleinput2Change2}
        fnBtn={handlebtnSearchChange}
      ></Modalg>
      {cambio ? (
        <>
          <div id="informacion">
            <p id="stay">Stays in Finland</p>
            <p id="stay2">{data.length>=14?"12+":data.length} stays</p>
          </div>
        </>
      ) : txtfiltro.length === 0 ? (
        <>
          {" "}
          <div id="ResultCont">
            <h2 id="Result">No se Encontro Resultados</h2>
          </div>{" "}
        </>
      ) : (
        <>
          <div id="informacion">
            <p id="stay">Stays in {txtfiltro[0].city}</p>
            <p id="stay2">{txtfiltro.length} stays</p>
          </div>
        </>
      )}
      <div className="Tarjeta">
        {/* Aquí te dejo un ejemplo de cómo podrías imprimir varios elementos a la vez. */}
        {cambio
          ? data.map((el, i) => {
              return (
                <Card
                  key={i}
                  imag={el.photo}
                  titulo={el.title}
                  Host={el.superHost}
                  tipo={el.type}
                  invitado={el.maxGuests}
                  rating={el.rating}
                />
              );
            })
          : txtfiltro.length === 0
          ? data.map((el, i) => {
              return (
                <Card
                  key={i}
                  imag={el.photo}
                  titulo={el.title}
                  Host={el.superHost}
                  tipo={el.type}
                  invitado={el.maxGuests}
                  rating={el.rating}
                />
              );
            })
          : txtfiltro.map((el, i) => {
              return (
                <Card
                  key={i}
                  imag={el.photo}
                  titulo={el.title}
                  Host={el.superHost}
                  tipo={el.type}
                  invitado={el.maxGuests}
                  rating={el.rating}
                />
              );
            })}
      </div>
    </>
  );
}

export default App;
