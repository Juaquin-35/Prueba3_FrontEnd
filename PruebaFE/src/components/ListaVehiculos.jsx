const ListaVehiculos = ({ vehiculos }) => {
    return (
        <div>
            {vehiculos.map((vehiculo, index) => (
                <CardVehiculo key={index} patente={vehiculo.patente} vehiculo={vehiculo.vehiculo} />
            ))}
            <h1>Lista de Vehículos</h1>
        </div>
    )
}