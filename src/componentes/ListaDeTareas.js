import React, { useState, useEffect } from 'react';
import Tarea from './Tarea';
import TareaFormulario from './TareaFormulario';
import '../estilos/ListaDeTareas.css';

function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((data) => setTareas(data.tareas))
      .catch((error) => console.error(error));
  }, []);

  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tarea),
      })
        .then((response) => response.json())
        .then((data) => {
          const tareaAgregada = data.tarea;
          setTareas((tareasActuales) => [...tareasActuales, tareaAgregada]);
        })
        .catch((error) => console.error(error));
    }
  };

  const completarTarea = (id) => {
    fetch(`/api/${id}/completar`, { method: 'PUT' })
      .then((response) => response.json())
      .then((data) => {
        const tareaActualizada = data.tarea;
        setTareas((tareasActuales) =>
          tareasActuales.map((tarea) => (tarea.id === tareaActualizada.id ? tareaActualizada : tarea))
        );
      })
      .catch((error) => console.error(error));
  };

  const eliminarTarea = (id) => {
    fetch(`/api/${id}`, { method: 'DELETE' })
      .then((response) => response.json())
      .then((data) => {
        const tareaEliminada = data.tarea;
        setTareas((tareasActuales) => tareasActuales.filter((tarea) => tarea.id !== tareaEliminada.id));
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="lista-de-tareas-container">
      <h2 className="lista-de-tareas-title">Lista de tareas</h2>
      <TareaFormulario Onsubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </div>
    </div>
  );
}

export default ListaDeTareas;










































// import React, { useState, useEffect } from 'react';
// import Tarea from './Tarea';
// import TareaFormulario from './TareaFormulario';
// import '../estilos/ListaDeTareas.css';

// function ListaDeTareas() {
//   const [tareas, setTareas] = useState([]);

//   useEffect(() => {
//     const tareasAlmacenadas = JSON.parse(localStorage.getItem('tareas'));
//     if (tareasAlmacenadas) {
//       setTareas(tareasAlmacenadas);
//     }
//   }, []);

//   const agregarTarea = (tarea) => {
//     if (tarea.texto.trim()) {
//       tarea.texto = tarea.texto.trim();
//       const tareasActualizadas = [...tareas, tarea];
//       setTareas(tareasActualizadas);
//       localStorage.setItem('tareas', JSON.stringify(tareasActualizadas));
//       fetch('/api', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(tarea),
//       })
//         .then((response) => response.text())
//         .then((data) => console.log(data))
//         .catch((error) => console.error(error));
//     }
    
//   };

//   const eliminarTarea = (id) => {
//     const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
//     setTareas(tareasActualizadas);
//     localStorage.setItem('tareas', JSON.stringify(tareasActualizadas));
//   };

//   const completarTarea = (id) => {
//     const tareaActualizada = tareas.map((tarea) => {
//       if (tarea.id === id) {
//         tarea.completada = !tarea.completada;
//       }
//       return tarea;
//     });
//     setTareas(tareaActualizada);
//     localStorage.setItem('tareas', JSON.stringify(tareaActualizada));
//   };

//   return (
//     <div className="lista-de-tareas-container">
//       <h2 className="lista-de-tareas-title">Lista de tareas</h2>
//       <TareaFormulario Onsubmit={agregarTarea} />
//       <div className="tareas-lista-contenedor">
//         {tareas.map((tarea) => (
//           <Tarea
//             key={tarea.id}
//             id={tarea.id}
//             texto={tarea.texto}
//             completada={tarea.completada}
//             completarTarea={completarTarea}
//             eliminarTarea={eliminarTarea}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ListaDeTareas;
