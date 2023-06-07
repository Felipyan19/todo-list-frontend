import React, { useState, useEffect } from "react";
import "../estilos/ListaDeBlocks.css";

function BlockDeNotas() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [blocksDeNotas, setBlocksDeNotas] = useState([]);

  useEffect(() => {
    const blocksDeNotasAlmacenados = JSON.parse(
      localStorage.getItem("blocksDeNotas")
    );
    if (blocksDeNotasAlmacenados) {
      setBlocksDeNotas(blocksDeNotasAlmacenados);
    }
  }, []);

  const toggleMostrarFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  const agregarBlockDeNotas = (titulo, contenido) => {
    const nuevoBlockDeNotas = {
      titulo: titulo,
      contenido: contenido,
    };
    const blocksDeNotasActualizados = [...blocksDeNotas, nuevoBlockDeNotas];
    setBlocksDeNotas(blocksDeNotasActualizados);
    localStorage.setItem(
      "blocksDeNotas",
      JSON.stringify(blocksDeNotasActualizados)
    );
    setMostrarFormulario(false);
  };

  const eliminarBlockDeNotas = (index) => {
    const nuevosBlocksDeNotas = [...blocksDeNotas];
    nuevosBlocksDeNotas.splice(index, 1);
    setBlocksDeNotas(nuevosBlocksDeNotas);
    localStorage.setItem(
      "blocksDeNotas",
      JSON.stringify(nuevosBlocksDeNotas)
    );
  };


  return (
    <div className="block-de-notas-contenedor">
      <div className="blocks-de-notas-lista-contenedor">
        {blocksDeNotas.map((blockDeNotas, index) => (
          <div key={index} className="block-de-notas-item">
            <h3>{blockDeNotas.titulo}</h3>
            <p>{blockDeNotas.contenido}</p>
            <button onClick={() => eliminarBlockDeNotas(index)}>
              Eliminar
            </button>
          </div>
        ))}
        {blocksDeNotas.length === 0 && (
          <p className="blocks-de-notas-vacio">No hay blocks de notas</p>
        )}
      </div>
      <div className="block-de-notas-formulario-fijo">
        <button onClick={toggleMostrarFormulario}>
          {mostrarFormulario ? "Cancelar" : "Agregar Block de Notas"}
        </button>
        {mostrarFormulario && (
          <BlockDeNotasFormulario onAgregar={agregarBlockDeNotas} />
        )}
      </div>
    </div>
  );
}

function BlockDeNotasFormulario(props) {
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAgregar(titulo, contenido);
    setTitulo("");
    setContenido("");
  };

  return (
    <form onSubmit={handleSubmit} className="block-de-notas-formulario">
      <label htmlFor="titulo">Título:</label>
      <input
        type="text"
        id="titulo"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        required
      />
      <label htmlFor="contenido">Contenido:</label>
      <textarea
        id="contenido"
        value={contenido}
        onChange={(e) => setContenido(e.target.value)}
        required
      ></textarea>
      <button type="submit">Agregar Block de Notas</button>
    </form>
  );
}

export default BlockDeNotas;
