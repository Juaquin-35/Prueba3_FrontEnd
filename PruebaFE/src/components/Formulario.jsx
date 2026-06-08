import { useState } from 'react';
import './Formulario.css';

function Formulario({ onAgregarVehiculo, cuposDisponibles }) {
  const [patente, setPatente] = useState('');
  const [permanente, setPermanente] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!patente.trim()) {
      setError('El campo de patente es obligatorio.');
      return;
    }

    //Validación de Formato de Patente: 4 letras y 2 números (Fase 3)
    const regexPatente = /^[A-Z-a-z]{4}\d{2}$/;
    if (!regexPatente.test(patente.trim())) {
      setError('Formato de patente inválido (Debe contener 4 letras y 2 números, ej: ABCD12).');
      return;
    }

    if (cuposDisponibles <= 0) {
      setError('No hay cupos disponibles.');
      return;
    }

    const nuevoVehiculo = {
      patente: patente.trim().toUpperCase(),
      permanente, // true si está marcado, false si queda como temporal (Fase 5)
      fechaIngreso: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const guardado = onAgregarVehiculo(nuevoVehiculo);
    
    if (guardado) {
      setPatente('');
      setPermanente(false);
    }
  };

  return (
    <section className="formulario-section">
      <h2>Registrar Ingreso Vehicular</h2>
      <form onSubmit={handleSubmit} className="parking-form">
        
        <div className="form-group">
          <label htmlFor="patente">Patente:</label>
          <input
            type="text"
            id="patente"
            maxLength="6"
            placeholder="AAAA11"
            value={patente}
            onChange={(e) => setPatente(e.target.value)}
          />
        </div>

        <div className="form-group-checkbox">
          <input
            type="checkbox"
            id="permanente"
            checked={permanente}
            onChange={(e) => setPermanente(e.target.checked)}
          />
          <label htmlFor="permanente">¿Pase de estacionamiento Permanente?</label>
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" disabled={cuposDisponibles === 0} className="btn-submit">
          {cuposDisponibles === 0 ? 'Estacionamiento Lleno' : 'Registrar Vehículo'}
        </button>
      </form>
    </section>
  );
}

export default Formulario;