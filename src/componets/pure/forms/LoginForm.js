import React, { useState } from 'react'

const loginForm = () => {

  const initialCredentials = [
    {
      user: '',
      password: ''
    }
  ];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [credentials, setCredentials] = useState(initialCredentials);

  return (
    <div>loginForm</div>
  )
}

export default loginForm