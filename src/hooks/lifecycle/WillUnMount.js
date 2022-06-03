import React, { Component, useEffect } from 'react'

class WillUnMount extends Component {

  componentWillUnmount() {
    console.log("Comportamiento antes de que el componente desaparezca")
  };

  render() {
    return (
     <div>WillUnMount</div>
    )
  }
}

const WillUnMountHook = () => {

  useEffect(() => {    
    return () => {
      console.log("Comportamiento antes de que el componente desaparezca")
    }
  }, [])
  

  return (
    <div>WillUnMount</div>
  )
}

export { WillUnMount, WillUnMountHook };