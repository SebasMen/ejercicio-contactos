import React from 'react'
import PropTypes from 'prop-types'
import { ContactClass } from '../../models/contact.class';

const Contact = ({ contact }) => {
  return (
    <>
      <h1>Nombre: { contact.name }</h1>
      <h2>Nombre: { contact.lastname }</h2>
      <h3>Email: { contact.email }</h3>
      <h4>Conectado: { (contact.connected) ? 'Conected' : 'Disconected' }</h4>
    </>
  )
}

Contact.propTypes = {
  contact: PropTypes.instanceOf(ContactClass)
}

export default Contact