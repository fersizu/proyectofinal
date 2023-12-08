import React, { useState } from "react";
import List from "./List";
import Card from "./Card";
import FormTarjetas from "./FormTarjetas";
import Menu from "./Menu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { Container } from "@mui/material";
import Grid from "@mui/material";
import Barranav from "./Barranav";


function App() {


    // Arreglo de objetos con los datos de los platillos
    const [platillos] = React.useState(Menu);

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

    //Funcion para crear Listas (PRUEBA, no es necesario)
    function createLists(){
      return (
            <List 
            book1="El señor de los anillos"
            book2="Harry Potter"
            book3="El alquimista"/>
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
    function showLists(){
        setUI(1);
    }

    // Funcion para imprimir Hello, PRUEBA, utliza el valor 2
    function showReservation(){
        setUI(2);
    }

    return (
        
      <Container sx={{bgcolor: "tomato"}}> 
      <Barranav>hola</Barranav>
           <div>
       <div class="container">
         <div class="row center">
           <div class="col"><button onClick={showCards}>Menu</button></div>
           <div class="col"><button onClick={showLists}>Interfaz 2</button></div>  
           <div class="col"><button onClick={showReservation}>Interfaz 3</button></div>  
           <div class="col"><button onClick={next}>Next</button></div> 
        </div>
    </div>  
            
            


    {ui === 0 ? platillos.map(createCard) : ui === 1 ? platillos.map(createLists) :  <h1>prueba</h1> }

        </div>
      </Container>
       
 
    );
}

export default App;
