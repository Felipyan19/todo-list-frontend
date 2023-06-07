import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../estilos/TareaFormulario.css';

function TareaFormulario(props) {
  const [texto, setTexto] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.Onsubmit({ id: uuidv4(), texto: texto, completada: false });
    setTexto('');
  };

  return (
    <form className="tarea-formulario" onSubmit={handleSubmit}>
      <input
        type="text"
        className="tarea-input"
        placeholder="Agrega una tarea..."
        value={texto}
        onChange={(event) => setTexto(event.target.value)}
      />
      <button type="submit" className="tarea-boton">
        Agregar tarea
      </button>
    </form>
  );
}

export default TareaFormulario;
