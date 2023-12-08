import React, { useState } from "react";

function Contacto() {

  return (
    
  <div>

  <br></br>
  <div class="container">
    <div class="row">
        <div class="col-lg"><h1>Llamanos:</h1></div>
        <div class="col-lg"><h3>614-217-9712</h3></div>  
        <div class="col-lg"><h3>614-215-8990</h3></div>  
    </div>
     <br></br>
    <div class="row">
        <div class="col-lg"><h1>Encuentranos:</h1></div>
        <div class="col-lg"><h3>Av. de las Industrias 11101, Complejo Industrial Chihuahua, 31130 Chihuahua, Chih.</h3></div>  
        <div class="col-lg"><h3></h3></div>    
    </div>
     <br></br>
    <div class="contact_form">

<div class="formulario">      
  <h1>¿Tienes alguna sugerencia?</h1>
    <h3>Escríbenos y en breve nos pondremos en contacto contigo</h3>

      <form action="submeter-formulario.php" method="post">       
            <p>
              <label for="nombre" class="colocar_nombre">Nombre
                <span class="obligatorio">*</span>
              </label>
                <input type="text" name="introducir_nombre" id="nombre" required="obligatorio" placeholder="Escribe tu nombre"/>
            </p>
          
            <p>
              <label for="email" class="colocar_email">Email
                <span class="obligatorio">*</span>
              </label>
                <input type="email" name="introducir_email" id="email" required="obligatorio" placeholder="Escribe tu Email"/>
            </p>
        
            <p>
              <label for="telefone" class="colocar_telefono">Teléfono
              </label>
                <input type="tel" name="introducir_telefono" id="telefono" placeholder="Escribe tu teléfono"/>
            </p>       
          
            <p>
              <label for="asunto" class="colocar_asunto">Asunto
                <span class="obligatorio">*</span>
              </label>
                <input type="text" name="introducir_asunto" id="assunto" required="obligatorio" placeholder="Escribe un asunto"/>
            </p>    
          
            <p>
              <label for="mensaje" class="colocar_mensaje">Mensaje
                <span class="obligatorio">*</span>
              </label>                     
                                <textarea name="introducir_mensaje" class="texto_mensaje" id="mensaje" required="obligatorio" placeholder="Deja aquí tu comentario..."></textarea> 
                            </p>                    
          
            <button type="submit" name="enviar_formulario" id="enviar"><p>Enviar</p></button>

            <p class="aviso">
              <span class="obligatorio"> * </span>Los campos son obligatorios.
            </p>          
      </form>

 </div>  
</div>

 </div>

</div>
  );
}

export default Contacto;
