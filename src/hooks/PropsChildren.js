function PropsChildren(props) {
  return (
    <div>
      <h1>Ejemplo de Children Props</h1>
      <h2>
        Nombre: {props.nombre}
      </h2>

      {props.children}
    </div>
  )
}

export default PropsChildren