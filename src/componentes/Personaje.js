


function Personaje({ id, nombre, imagen, especie, estado}) {

  return (
    <div className="personaje">     
      <img src={imagen} />
      <div className="info-personaje">
        <div className="nombre">{nombre}</div>
        <div className="contenedor">
          <div className="especie">{especie}</div>
          <div className="estado">
            <div>{estado}</div>
            <div className={`circulo ${estado === 'Alive' ? 'vivo' : estado === 'Dead' ? 'muerto' : 'unknown'}`}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Personaje;