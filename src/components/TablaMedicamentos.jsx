import FilaMedicamento from "./FilaMedicamento";

function TablaMedicamentos({ medicamentos, total, busqueda, onBuscar, onEditar, onEliminar }) {
  return (
    <section className="card border-0 shadow-sm">
      <div className="card-body p-3 p-md-4">
        <div className="row align-items-center g-3 mb-3">
          <div className="col-12 col-md-6">
            <h2 className="h5 fw-bold mb-0">Catálogo de medicamentos</h2>
          </div>
          <div className="col-12 col-md-6">
            <input
              type="search"
              className="form-control"
              placeholder="Buscar por nombre o tipo..."
              aria-label="Buscar medicamentos"
              value={busqueda}
              onChange={(e) => onBuscar(e.target.value)}
            />
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th scope="col">Medicamento</th>
                <th scope="col">Tipo</th>
                <th scope="col">Stock</th>
                <th scope="col">Emisión</th>
                <th scope="col">Vencimiento</th>
                <th scope="col" className="text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {medicamentos.map((m) => (
                <FilaMedicamento key={m.id} medicamento={m} onEditar={onEditar} onEliminar={onEliminar} />
              ))}
              {medicamentos.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center text-secondary py-5">
                    No se encontraron medicamentos.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <p className="small text-secondary mt-3 mb-0">
          Mostrando {medicamentos.length} de {total} medicamentos.
        </p>
      </div>
    </section>
  );
}

export default TablaMedicamentos;