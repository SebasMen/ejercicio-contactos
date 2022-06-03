import React, { Component } from 'react'

export class lifeCycle extends Component {

  constructor(props) {
    super(props);
    console.log('Constructor: Cuando se instancia el componente');
  }

  componentWillMount() {
    console.log("WillMount: Antes del montaje del componente");
  }

  componentDidMount() {
    console.log("DidMount: Antes del renderizado, peticiones HTTP");
  }

  componentWillReceiveProps(nextProps) {
    console.log("WillReceiveProps: Si va recibir nuevas props")
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Controla si el componente debe o no actualizarse
    // return true / false
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("WillUpdate: Antes de actualizarse");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("DidUpdate: Cuando ha sido actualizado");
  }

  componentWillUnmount() {
    console.log("WillUnmount: Justo antes de desaparecer de la vista");
  }

  render() {
    return (
      <div>lifeCycle</div>
    )
  }
}

export default lifeCycle;
