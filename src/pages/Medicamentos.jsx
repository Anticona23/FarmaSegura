import { useState } from "react";
import TablaMedicamentos from "../components/TablaMedicamentos";
import FormularioMedicamento from "../components/FormularioMedicamento";
import TarjetaIndicador from "../components/TarjetaIndicador";

const listaMedicamentos = [
  { id: 1, nombre: "Paracetamol", tipo: "Analgésico", stock: 120, emision: "2025-06-12", vencimiento: "2027-08-15" },
  { id: 2, nombre: "Amoxicilina", tipo: "Antibiótico", stock: 8, emision: "2025-05-11", vencimiento: "2027-05-20" },
  { id: 3, nombre: "Ibuprofeno", tipo: "Antiinflamatorio", stock: 65, emision: "2025-02-23", vencimiento: "2027-11-10" },
];

function Medicamentos() {
  const [medicamentos, setMedicamentos] = useState(listaMedicamentos);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [medicamentoEditando, setMedicamentoEditando] = useState(null);
  const [busqueda, setBusqueda] = useState("");

  const medicamentosFiltrados = medicamentos.filter((m) =>
    `${m.nombre} ${m.tipo}`.toLowerCase().includes(busqueda.toLowerCase())
  );

  const abrirFormulario = (medicamento = null) => {
    setMedicamentoEditando(medicamento);
    setMostrarFormulario(true);
  };

  const cerrarFormulario = () => {
    setMostrarFormulario(false);
    setMedicamentoEditando(null);
  };

  const guardarMedicamento = (datos, id) => {
    const medicamento = {
      ...datos,
      nombre: datos.nombre.trim(),
      tipo: datos.tipo.trim(),
      stock: Number(datos.stock),
    };

    setMedicamentos((anteriores) =>
      id
        ? anteriores.map((m) => (m.id === id ? { ...medicamento, id } : m))
        : [...anteriores, { ...medicamento, id: Date.now() }]
    );

    cerrarFormulario();
  };

  const eliminarMedicamento = (id) => {
    if (!window.confirm("¿Estás seguro de que deseas eliminar este medicamento?")) return;
    setMedicamentos((anteriores) => anteriores.filter((m) => m.id !== id));
  };

  return (
    <main className="container py-4 py-md-5">
      {/* Encabezado */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
        <div>
          <h1 className="h2 fw-bold mb-1">Medicamentos</h1>
          <p className="text-secondary mb-0">
            Administra el catálogo y controla el stock disponible.
          </p>
        </div>
        <button type="button" className="btn btn-success" onClick={() => abrirFormulario()}>
          <span aria-hidden="true">＋ </span>Añadir medicamento
        </button>
      </div>

      {/* Indicadores */}
      <div className="row g-3 mb-4">
        <TarjetaIndicador
          titulo="Total de medicamentos"
          valor={medicamentos.length}
        />
        <TarjetaIndicador
          titulo="Productos con stock bajo"
          valor={medicamentos.filter((m) => m.stock < 10).length}
          color="text-warning"
          detalle="Menos de 10 unidades"
        />
        <TarjetaIndicador
          titulo="Unidades en inventario"
          valor={medicamentos.reduce((total, m) => total + m.stock, 0)}
          color="text-success"
          className="col-12 col-lg-4"
        />
      </div>

      <TablaMedicamentos
        medicamentos={medicamentosFiltrados}
        total={medicamentos.length}
        busqueda={busqueda}
        onBuscar={setBusqueda}
        onEditar={abrirFormulario}
        onEliminar={eliminarMedicamento}
      />

      {mostrarFormulario && (
        <FormularioMedicamento
          medicamento={medicamentoEditando}
          onGuardar={guardarMedicamento}
          onCerrar={cerrarFormulario}
        />
      )}
    </main>
  );
}

export default Medicamentos;