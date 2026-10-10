function TarjetaIndicador({
  titulo,
  valor,
  color = "",
  detalle,
  className = "col-12 col-sm-6 col-lg-4",
}) {
  return (
    <div className={className}>
      <div className="card border-0 shadow-sm h-100">
        <div className="card-body">
          <p className="text-secondary mb-1">{titulo}</p>
          <h2 className={`h3 fw-bold mb-0 ${color}`}>{valor}</h2>
          {detalle && <small className="text-secondary">{detalle}</small>}
        </div>
      </div>
    </div>
  );
}

export default TarjetaIndicador;