import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import CardVehiculo from './components/CardVehiculo'
import Formulario from './components/Formulario'
import ListaVehiculos from './components/ListaVehiculos'
import index from './index.css'

import './App.css'

function App() {
  const [vehiculos, setVehiculos] = useState([]);

  const handleFormSubmit = (data) => {
    setVehiculos([...vehiculos, data]);
  };

  return (
    <>
      <h1>Registro de Vehículos</h1>
      <Formulario onSubmit={handleFormSubmit} />
      <ListaVehiculos vehiculos={vehiculos} />
    </>
  )
}

export default App
