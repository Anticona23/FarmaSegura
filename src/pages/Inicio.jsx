import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Inicio() {
  return (
   <main className="container py-5">
      {/* Encabezado */}
      <section className="bg-success bg-opacity-10 rounded-4 p-4 p-md-5 mb-4">
        <div className="row align-items-center g-4">
          <div className="col-lg-8">

            <h1 className="display-5 fw-bold">
              Bienvenido a FarmaGest
            </h1>

            <p className="lead text-secondary">
              Administra el inventario de tu farmacia,
              consulta medicamentos y mantén tus registros
              organizados desde un solo lugar.
            </p>

            <Link to="/medicamentos" className="btn btn-success btn-lg mt-2">
              Gestionar medicamentos
            </Link>

          </div>

          <div className="col-lg-4 text-center">
            <div className="display-1" role="img" aria-label="Farmacia">
              💊
            </div>
            <p className="text-success fw-semibold mb-0">
              Tu farmacia, mejor organizada
            </p>
          </div>
        </div>
      </section>

      {/* Indicadores de ejemplo */}
      <section className="mb-5">
        <h2 className="h4 fw-bold mb-3">Resumen del inventario </h2>

        <div className="row g-3">
          <div className="col-12 col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <p className="text-secondary mb-2">Medicamentos registrados</p>
                <h3 className="display-6 fw-bold text-success">3</h3>
                <p className="small text-secondary mb-0">
                  Productos 
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <p className="text-secondary mb-2">Stock bajo</p>
                <h3 className="display-6 fw-bold text-warning">1</h3>
                <p className="small text-secondary mb-0">Requiere revisión</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <p className="text-secondary mb-2">Acciones rápidas</p>
                <h3 className="h4 fw-bold">Inventario</h3>
                <Link to="/medicamentos" className="btn btn-outline-success mt-2">
                  Ver catálogo →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Información */}
      <section id="nosotros" className="mb-5">
        <h2 className="h4 fw-bold">Acerca del sistema</h2>
        <p className="text-secondary">
          FarmaSegura es una interfaz para registrar, consultar,
          actualizar y eliminar medicamentos. Su objetivo es
          facilitar el control del catálogo y del inventario.
        </p>
      </section>

      <Footer/>
    </main>
  );
}

export default Inicio;