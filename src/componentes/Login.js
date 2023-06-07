import React, { useState } from 'react';
import '../estilos/Login.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica para autenticar al usuario aquí
    // Puedes implementar la lógica de autenticación o utilizar una API o servicio externo
    // Aquí se muestra un ejemplo simple de autenticación
    if (username === 'admin' && password === 'admin123') {
      onLogin(); 
    // Llama a la función proporcionada por el componente padre para manejar el inicio de sesión
    } else {
      alert('Credenciales inválidas');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Usuario:
          </label>
          <input
            type="text"
            id="username"
            className="form-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}

export default Login;


// {
//   "operation": "ccg-unisanitas",
//   "module": "leads",
//   "wolkvox-id": "'.$wolkvox_id.'",
//   "fields": {
//       "status": "Sin gestion",
//       "Tipo de Lead": "Pauta",
//       "Programa": "Pregrados",
//       "Programa académico": "Enfermería",
//       "Etapa del ciclo de vida ": "Aspirante",
//       "Etapa detallada ": "Sin gestion",
//       "Url": "https:\/\/developers.facebook.com"
//   }
// }


