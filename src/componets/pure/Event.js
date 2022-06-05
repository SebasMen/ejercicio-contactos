import React, {useRef} from 'react'

const Event = ({name, showMessage, update}) => {
  const messageRef = useRef('');
  const nameRef = useRef('')
  
  function button1() {
    const text = messageRef.current.value;
    alert(`Button 1 ${text}`);
  }

  function button2(text) {
    alert(text);
  }

  function SubmitName(e) {
    e.preventDefault();
    update(nameRef.current.value);

  }

  return (
    <div>
      <h1 onMouseOver={() => console.log('Mouse over')}>Events in React</h1>
      <h2 style={{color: 'white'}}>{name}</h2>

      <button onClick={button1}>Button 1</button>

      <button onClick={() => button2('Hello')}>Button 2</button>

      <button onClick={() => showMessage(messageRef.current.value)}>Send Message</button>

      <input 
        placeholder='Insert a text'
        onFocus={() => console.log('Insput focused')}
        onChange={(e) => console.log('Input change:', e.target.value)}
        onCopy={() => console.log('Copied text from input')}
        ref={messageRef}
      />

      <div style={{marginTop: '20px'}}>
        <form onSubmit={SubmitName}>
          <input placeholder='New name' ref={nameRef}/>
          <button type='submit'>Update Name</button>
        </form>
      </div>
    </div>
  )
}

export default Event