import { useState, useRef, useEffect } from 'react';

const UseEffect = () => {
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  // useRef asocia una variable con un elemento del DOM.
  const miRef = useRef();

  function incrementar1() {
    setContador1(contador1 + 1);
  }

  function incrementar2() {
    setContador2(contador2 + 1);
  }

  /**
   * ? Caso 1: Ejecutar siempre el codigo al detectar cambio en el estado
   */
  // useEffect(() => {
  //   console.log('Cambio en el estado del componente');
  //   console.log('mostrando referencia a elemento del DOM')
  //   console.log(miRef);
  // })

  /**
   * ? Caso 2 Ejecutar cuando solo cambie el estado del contador 1
   */
  // useEffect(() => {
  //   console.log('Cambio en el estado del contador 1');
  // }, [contador1])

  /**
   * ? Caso 2 Ejecutar cuando cambie el estado del contador 1 y del contador 2
   */
  useEffect(() => {
    console.log('Cambio en el estado de los dos contadores');
  }, [contador1, contador2])

  return (
    <div>
      <h1>Ejemplo de useState, useRef, useEffect</h1>

      <h2>Contador 1: {contador1}</h2>
      <h2>Contador 2: {contador2}</h2>

      {/* Elemento referenciado */}
      <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>

      <div>
        <button onClick={incrementar1}>Incrementar contador 1</button>
        <button onClick={incrementar2}>Incrementar contador 2</button>        
      </div>
    </div>
  )
}

export default UseEffect