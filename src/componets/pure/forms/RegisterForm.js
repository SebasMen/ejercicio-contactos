import React, { useState } from 'react'

const RegisterForm = () => {
  const initialData = [
    {
      user: '',
      name: '',
      email: '',
      password: ''
    }
  ];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState(initialData);

  return (
    <div>RegisterForm</div>
  )
}

export default RegisterForm