import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box } from '@mui/material';

const ComboBox = (props) => {
    const { opciones } = props;
  return (
      <Box  sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={opciones}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Seleccione una opcion" />}
    />
    </Box>
  );
}


export default ComboBox;