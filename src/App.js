import React, { useState } from 'react';
import ListaDeTareas from './componentes/ListaDeTareas';
import ListaDeBlocks from './componentes/ListaDeBlocks';
import Login from './componentes/Login';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [data, setData] = React.useState(null);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="app-container">
      <div className="header-container">
        <h1 className="header-title">Contact Center Grupo</h1>
        {isLoggedIn && (
          <button className="logout-button" onClick={handleLogout}>
            Cerrar sesión
          </button>
        )}
      </div>
      <div className="content-container">
        {isLoggedIn ? (
          <>
            <h2 className="content-subtitle">Admi</h2>
            <div className="tasks-container">
              <ListaDeTareas />
            </div>
            <div className="fixed-blocks-container">
              <button className="blocks-container-button">
                <div className="blocks-container">
                  <div className="blocks-header-container">
                    <h2 className="blocks-title">Blocks de Notas</h2>
                  </div>
                  <ListaDeBlocks />
                </div>
              </button>
            </div>
          </>
        ) : (
          <>
          <Login onLogin={handleLogin} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;

