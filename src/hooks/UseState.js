import { useState } from 'react'

function UseState() {
  const valorInicial = 0

  const personaInicial = {
    nombre: 'Sebastian',
    email: 'meneses321@hotmail.com'
  }

  const [contador, setContador] = useState(valorInicial)
  const [persona, setPersona] = useState(personaInicial)

  function incrementarContador() {
    setContador(contador + 1)
  }

  function actualizarPersona() {
    setPersona(
      {
        nombre: 'Juan',
        email: 'juan@gmail.com'
      }
    )
  }

  return (
    <>
      <h1>Ejemplo de useState</h1>

      <h2>Contador: {contador}</h2>

      <h3>Persona</h3>
      <p>Nombre: {persona.nombre}</p>
      <p>Email: {persona.email}</p>

      <button onClick={incrementarContador}>Incrementar contador</button>
      <button onClick={actualizarPersona}>Actualizar Persona</button>
    </>
  )
}

export default UseState
