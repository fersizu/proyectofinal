import React, { useState } from "react";
import List from "./List";
import Card from "./Card";
import FormTarjetas from "./FormTarjetas";
import Menu from "./Menu";
import { Container } from "@mui/material";
import Grid from "@mui/material";
import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from "@mui/material";
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import Formulario from "./Formulario";
import ComboBox from "./Calendario";

function App() {


    // Arreglo de objetos con los datos de los platillos
    const [platillos] = React.useState(Menu);
    //Variable para reservar

    //Funcion para crear Tarjetas
    function createCard(platillo) {
        return (
            
            <Card 
                key={platillo.id}
                nombre={platillo.nombre} 
                image={platillo.image} 
                costo={platillo.costo} 
                descr={platillo.descr} 
            />
            
        );
    }

    


    // Variable de control de estado para la interfaz
    const [ui, setUI] = useState(0);

    // Funcion para cambiar las Interfases con aumentos
    function next(){
        let uiTemp = ui+1;  //Interfaz temporal con aumento de click
        if (uiTemp >= 3) {  //Reinicia al dar la vuelta
            uiTemp = 0;
        } 
        setUI(uiTemp);      //Funcion para actualizar el estado
    }

    // Funcion para mostrar Tarjetas (Menu Platillos), utiliza el valor 0
    function showCards(){
        setUI(0);
    }

    // Funcion para imprimir listas (PRUEBA, no es necesario), utiliza el valor 1
    function showCalendar(){
        
        setUI(1);
    }

    // Funcion para imprimir Hello, PRUEBA, utliza el valor 2
    function showReservation(){
        setUI(2);
    }

    return (
        <div>
        
            
            <AppBar position='static' >
                <Toolbar sx={{ justifyContent: 'space-between'}}>
                    <box>
                    <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                        <RiceBowlIcon />
                    </IconButton>
                    <Typography variant="h4" component='div' xs={{ flexGrow: 1 }}>
                        Bisonsushi
                    </Typography>
                    </box>
                    <box>
                    <Stack direction="row" spacing={2} >
                            
                        <Button color='inherit' onClick={showCards}>Menu</Button>
                        <Button color='inherit' onClick={showCalendar}>Reservaciones</Button>
                        <Button color='inherit' onClick={showReservation}>Contactanos</Button>
                    </Stack>
                    </box>
                </Toolbar>
            </AppBar>

            


    {ui === 0 ? platillos.map(createCard) : ui === 1 ? <Formulario/> :  <h1>prueba</h1> }

        
        </div>
       
 
    );
}

export default App;
