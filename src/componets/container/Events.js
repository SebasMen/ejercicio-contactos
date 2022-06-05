import React, {useState} from 'react'
import Event from '../pure/Event'

const Events = () => {

  const [name, setName] = useState('Sebastian')

  function showMessage(text) {
    alert(`Message recivied: ${text}`);
  }

  function updateName(newName) {
    setName(newName)
  }

  return (
    <div>
      <Event name={name} showMessage={showMessage} update={updateName} />
    </div>
  )
}

export default Events