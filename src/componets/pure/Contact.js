import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ContactClass } from '../../models/contact.class';

const Contact = ({ contact }) => {
  const [connected, setConnected] = useState(contact.connected);

  return (
    <>
      <h1>Nombre: { contact.name }</h1>
      <h2>Nombre: { contact.lastname }</h2>
      <h3>Email: { contact.email }</h3>
      <h4>Status: { (connected) ? 'Connected' : 'Disconnected' }</h4>
      <button onClick={() => setConnected(!connected)}>{(connected) ? 'Connected' : 'Disconnected'}</button>
    </>
  )
}

Contact.propTypes = {
  contact: PropTypes.instanceOf(ContactClass)
}

export default Contact