import React, { Component, useEffect } from 'react'

class DidMount extends Component {

  componentDidMount() {
    console.log("Se ejecuta antes que se rederice");
  }

  render() {
    return (
      <div>DidMount</div>
    )
  }
}


const DidMountHook = () => {

  useEffect(() => {
    console.log("Se ejecuta antes que se rederice con Hook useEffect")
  }, []);

  return (
    <div>DidMount</div>
  )
}

export { DidMount, DidMountHook }