import React, { useState, useContext } from 'react'

const miContext = React.createContext(null);

/**
 * 
 * @returns UseContext
 * Dispone de un contexto que va tener un valor que recibe del padre
 */
const UseContext = () => {
  const state = useContext(miContext);

  return (
    <div>
      <h1>El token es: {state.token}</h1>

      {/* Pintamos el componente hijo */}
      <Componente></Componente>
    </div>
  )
}


export const Componente = () => {
  const state = useContext(miContext);

  return (
    <div>
      <h2>
        La sesión es: {state.sesion}
      </h2>
    </div>
  )
}



export const ComponenteContext = () => {
  const estadoInicial = {
    token: '123456',
    sesion: 1
  }

  const [sesion, setSesion] = useState(estadoInicial);

  function actualizarSesion() {
    setSesion(
      {
        token: 'JWT123456678',
        sesion: sesion.sesion + 1
      }
    )
  }

  return (
    <div>
      <miContext.Provider value={sesion}>
        {/* Todo lo que este adentro puede acceder a el estado */}
        <h1>Ejemplo de useContext</h1>
        <UseContext></UseContext>
        <button onClick={actualizarSesion}>Iniciar sesión</button>
      </miContext.Provider>
    </div>
  )
}

export default ComponenteContext;


