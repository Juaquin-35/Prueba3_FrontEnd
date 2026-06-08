import CardVehiculo from './CardVehiculo';
import './ListaVehiculos.css';

function ListaVehiculos({ vehiculos, onEliminarVehiculo }) {
  return (
    <section className="lista-section">
      <h2>Registros de Vehículos Estacionados</h2>
      

      {vehiculos.length === 0 ? (
        <p className="empty-message">No hay vehículos registrados en este momento. El estacionamiento está vacío.</p>
      ) : (

        <div className="vehiculos-grid">
          {vehiculos.map((vehiculo) => (
            <CardVehiculo

              key={vehiculo.patente}
              vehiculo={vehiculo}
              onEliminar={onEliminarVehiculo}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default ListaVehiculos;