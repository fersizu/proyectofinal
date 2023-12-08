import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function Calendario(props){

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
          label="Día"
          onChange={props.dia}
          name="dia"
          placeholder="Dia"
        />
        <TextField
          variant="outlined"
          onChange={props.hora}
          label="Hora"
          name="Hora"
          placeholder="Hora"
        />
        <Button variant="contained" onClick={props.addContact}>
          Submit
        </Button>
      </div>
    );
}

export default Calendario;