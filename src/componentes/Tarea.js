import React from "react";
import {FcReuse} from "react-icons/fc";
import "../estilos/Tarea.css";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={`tarea-contenedor ${completada ? "completada" : ""}`}>
      <div className="tarea-texto" onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div
        className="tarea-contenedor-iconos"
        onClick={() => eliminarTarea(id)} >
        <FcReuse className="tarea-icono" />
      </div>
    </div>
  );
}

export default Tarea;