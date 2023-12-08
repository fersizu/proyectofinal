import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const ComboBox = (props) => {
    const { opciones } = props;
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={opciones}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Seleccione una opcion" />}
    />
  );
}


export default ComboBox;