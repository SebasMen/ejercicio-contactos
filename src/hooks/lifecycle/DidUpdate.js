import React, { Component, useEffect } from 'react'

class DidUpdate extends Component {

  componentDidUpdate() {
    console.log("Comportamiento cuando el componente recibe nuevos props o cambio en el estado privado");
  }

  render() {
    return (
      <div>DidUpdate</div>
    )
  }
}


const DidUpdateHook = () => {

  useEffect(() => {
    console.log("Comportamiento cuando el componente recibe nuevos props o cambio en el estado privado");
  },);

  return (
    <div>DidUpdateHook</div>
  )
}

export { DidUpdate, DidUpdateHook }