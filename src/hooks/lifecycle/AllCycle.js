import React, { useEffect } from 'react'

export const AllCycle = () => {

  useEffect(() => {
    console.log("Componente creado");

    const intervalId = setInterval(() => {
      document.title = `${new Date()}`;
      console.log("actualizacion del componente");
    }, 1000);

    return () => {
      console.log("Componente va a desaparecer");
      document.title = "Tiempo detenido";
      clearInterval(intervalId);
    }
  })
  
  return (
    <div>AllCycle</div>
  )
}
