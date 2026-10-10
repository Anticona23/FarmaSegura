import { useState } from "react";

const vacio = { nombre: "", tipo: "", stock: "", emision: "", vencimiento: "" };

function FormularioMedicamento({ medicamento, onGuardar, onCerrar }) {
  const [formulario, setFormulario] = useState(
    medicamento
      ? { ...vacio, ...medicamento, stock: String(medicamento.stock) }
      : vacio
  );

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario((prev) => ({ ...prev, [name]: value }));
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    onGuardar(formulario, medicamento?.id);
  };

  return (
    <div
      className="modal d-block"
      tabIndex="-1"
      role="dialog"
      aria-modal="true"
      aria-labelledby="tituloFormulario"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content border-0 shadow">
          <form onSubmit={manejarEnvio}>
            <div className="modal-header">
              <h2 className="modal-title fs-5 fw-bold" id="tituloFormulario">
                {medicamento ? "Editar medicamento" : "Añadir medicamento"}
              </h2>
              <button type="button" className="btn-close" onClick={onCerrar} aria-label="Cerrar" />
            </div>

            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre del medicamento</label>
                <input id="nombre" name="nombre" className="form-control"
                  value={formulario.nombre} onChange={manejarCambio} required maxLength={100} />
              </div>

              <div className="mb-3">
                <label htmlFor="tipo" className="form-label">Tipo de medicamento</label>
                <input id="tipo" name="tipo" className="form-control" placeholder="Ej. Analgésico"
                  value={formulario.tipo} onChange={manejarCambio} required maxLength={60} />
              </div>

              <div className="row g-3">
                <div className="col-6">
                  <label htmlFor="stock" className="form-label">Stock</label>
                  <input id="stock" name="stock" type="number" min="0" step="1" className="form-control"
                    value={formulario.stock} onChange={manejarCambio} required />
                </div>
                <div className="col-6">
                  <label htmlFor="emision" className="form-label">Fecha de emisión</label>
                  <input id="emision" name="emision" type="date" className="form-control"
                    value={formulario.emision} onChange={manejarCambio} required />
                </div>
              </div>

              <div className="mt-3">
                <label htmlFor="vencimiento" className="form-label">Fecha de vencimiento</label>
                <input id="vencimiento" name="vencimiento" type="date" className="form-control"
                  value={formulario.vencimiento} onChange={manejarCambio} required />
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-outline-secondary" onClick={onCerrar}>
                Cancelar
              </button>
              <button type="submit" className="btn btn-success">
                {medicamento ? "Guardar cambios" : "Registrar"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormularioMedicamento;