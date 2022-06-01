import React from 'react';
import Contact from '../pure/Contact';
import { ContactClass } from '../../models/contact.class';

const Contacts = () => {
  const defaultContact = new ContactClass('Sebastian', 'Meneses', 'meneses321@hotmail.com', false);

  return (
    <>
      <Contact contact={defaultContact} />
    </>
  )
}

export default Contacts