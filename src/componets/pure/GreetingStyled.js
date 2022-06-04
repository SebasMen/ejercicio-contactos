import React, { useState } from 'react'

// Definiendo estilos en constantes
const loggedStyle = {
  color: 'white',
  fontWeight: 'bold'
}

const unLoggedStyle = {
  color: 'tomato',
  fontWeight: 'bold'
}

const GreetingStyled = (props) => {

  const [logged, setLogged] = useState(false);

  return (
    <div style={ logged ? loggedStyle : unLoggedStyle }>
      { logged ? <p>Hola, {props.name}</p> : <p>Please login</p> }
      

      <button onClick={() => setLogged(!logged)} className="btn btn-primary">
        { logged ? 'Logout' : 'Login' }
      </button>
    </div>
  )
}

export default GreetingStyled