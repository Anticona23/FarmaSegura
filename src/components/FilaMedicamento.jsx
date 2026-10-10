

function FilaMedicamento({ medicamento, onEditar, onEliminar }) {
  const { nombre, tipo, stock, emision, vencimiento } = medicamento;

  const formatoFecha = (fecha) => {
    if (!fecha) return "—";

    return new Date(`${fecha}T00:00:00`).toLocaleDateString("es-PE");
  };

  return (
    <tr>
      <td className="fw-semibold">{nombre}</td>
      <td>{tipo}</td>
      <td>
        <span className={`badge ${stock < 10 ? "text-bg-warning" : "text-bg-success"}`}>
          {stock} unidades
        </span>
      </td>
      <td className="text-nowrap">{formatoFecha(emision)}</td>
      <td className="text-nowrap">{formatoFecha(vencimiento)}</td>
      <td>
        <div className="d-flex justify-content-center gap-2">
          <button
            type="button"
            className="btn btn-sm btn-outline-primary"
            onClick={() => onEditar(medicamento)}
            aria-label={`Editar ${nombre}`}
          >
            Editar
          </button>
          <button
            type="button"
            className="btn btn-sm btn-outline-danger"
            onClick={() => onEliminar(medicamento.id)}
            aria-label={`Eliminar ${nombre}`}
          >
            Eliminar
          </button>
        </div>
      </td>
    </tr>
  );
}

export default FilaMedicamento;