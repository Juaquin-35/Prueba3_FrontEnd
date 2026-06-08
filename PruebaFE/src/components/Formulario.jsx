const Formulario = ({ onSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const vehiculo = {
            patente: formData.get('patente'),
            vehiculo: formData.get('vehiculo')
        };
        onSubmit(vehiculo);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="patente" placeholder="Patente" required />
            <input type="text" name="vehiculo" placeholder="Vehículo" required />
            <button type="submit">Agregar Vehículo</button>
        </form>
    );
};
