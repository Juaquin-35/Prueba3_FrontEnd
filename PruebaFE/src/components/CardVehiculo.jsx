import './CardVehiculo.css';

function CardVehiculo({ vehiculo, onEliminar }) {
  const { patente, permanente, fechaIngreso } = vehiculo;

  return (
    <div className={`card-vehiculo ${permanente ? 'status-permanente' : 'status-transitorio'}`}>
      <div className="card-header">
        <span className="badge-patente">{patente}</span>
        <span className="badge-tipo">
          {permanente ? 'Permanente' : 'Temporal'}
        </span>
      </div>
      <div className="card-body">
        <p><strong>Hora Ingreso:</strong> {fechaIngreso}</p>
      </div>
      <div className="card-footer-btn">
        <button className="btn-liberar" onClick={() => onEliminar(patente)}>
                Registrar Salida
        </button>
      </div>
    </div>
  );
}

export default CardVehiculo;