import React,{ useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ComboBox from "./Calendario";


function Formulario(props) {

  const [reservado,setReservar] = useState (0);

  


  // arreglo de dias
  const arregloDias = [
    'Lunes', 'Martes', 'Miercoles','Jueves','Viernes','Sabado','Domingo'
  ];
  // arreglo de dias
  const arregloHoras = [
    '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ];

  return (
    <div>
      <TextField
        className="inp"
        variant="outlined"
        label="Nombre"
        onChange={props.nameHandler}
        name="fName"
        placeholder="Nombre"
      />
      <TextField
        className="inp"
        variant="outlined"
        label="Telefono"
        onChange={props.dia}
        name="Telefono"
        placeholder="Telefono"
      />
      <ComboBox opciones={arregloDias} />
      <ComboBox opciones={arregloHoras} />


      <Button variant="contained" onClick={setReservar}>
        Submit
      </Button>

    </div>
  );
}

export default Formulario;