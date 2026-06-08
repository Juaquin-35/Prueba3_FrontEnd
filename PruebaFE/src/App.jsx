import { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListaVehiculos from './components/ListaVehiculos';
import './App.css';

function App() {
  const [vehiculos, setVehiculos] = useState(() => {
    const savedVehiculos = localStorage.getItem('vehiculos_estacionamiento');
    return savedVehiculos ? JSON.parse(savedVehiculos) : [];
  });

  const CAPACIDAD_TOTAL = 10;

  useEffect(() => {
    localStorage.setItem('vehiculos_estacionamiento', JSON.stringify(vehiculos));
  }, [vehiculos]);

  const agregarVehiculo = (nuevoVehiculo) => {
    if (vehiculos.length >= CAPACIDAD_TOTAL) {
      alert('Error: No quedan cupos disponibles en el estacionamiento.');
      return false;
    }
    setVehiculos([...vehiculos, nuevoVehiculo]);
    return true;
  };

  const eliminarVehiculo = (patente) => {
    setVehiculos(vehiculos.filter(v => v.patente !== patente));
  };

  const cuposDisponibles = CAPACIDAD_TOTAL - vehiculos.length;

  return (
    <div className="app-container">
      <header>
        <h1>Sistema de Gestión de Estacionamiento</h1>
        <div className={`cupos-info ${cuposDisponibles === 0 ? 'cupos-alerta' : ''}`}>
          Cupos Disponibles: {cuposDisponibles} / {CAPACIDAD_TOTAL}
        </div>
      </header>

      <main>
        <Formulario 
          onAgregarVehiculo={agregarVehiculo} 
          cuposDisponibles={cuposDisponibles} 
        />
        <ListaVehiculos 
          vehiculos={vehiculos} 
          onEliminarVehiculo={eliminarVehiculo} 
        />
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} - Sistema Control de Flujo Vehicular | Asignatura Programación Front End | Dev: Juaquin Álvarez</p>
      </footer>
    </div>
  );
}

export default App;