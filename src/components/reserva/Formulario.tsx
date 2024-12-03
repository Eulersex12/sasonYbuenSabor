
import React from 'react';
import './reserva.css';

const Formulario = () => {
  return (
    <form>
      <h2>Reserva tu Mesa</h2>
      <div className="caja-datos">
        <div className="dato-name">
          <label className='nombre' htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />
        </div>
        <div className="dato-apel">
          <label className='nombre' htmlFor="apellido">Apellido:</label> 
        <input type="text" id="apellido" name="apellido" required />
        </div>
      </div>
      <div className="caja-dni">
        <div className="dato-name">
          <label className='nombre' htmlFor="dni">DNI:</label>
          <input type="number" id="dni" name="dni" required />
        </div>
        <div className="dato-apel">
          <label className='nombre' htmlFor="correo">Correo:</label> 
        <input type="text" id="correo" name="correo" required />
        </div>
      </div>
      <div className="caja-fecha">
        <div className="dato-name">
          <label className='nombre' htmlFor="fecha">Fecha</label>
          <input type="date" id="fecha" name="fecha" required />
        </div>
        <div className="dato-apel">
          <label className='nombre' htmlFor="hora">Hora</label> 
        <input type="time" id="hora" name="hora" required />
        </div>
      </div>
      <label htmlFor="evento">Tipo de Evento:</label> 
      <select id="evento" name="evento" required> 
        <option value="cumpleaños">Cumpleaños</option> 
        <option value="pedida">Pedida de Mano</option> 
        <option value="aniversario">Aniversario</option> 
        <option value="otros">Otros</option> 
      </select>

      <button type="submit">Reservar</button>
    </form>
  );
};

export default Formulario;


  
