import React, { useState, useEffect } from 'react';

const Input = () => {
  const [text, setText] = useState('title')
  const [show, setShow] = useState(false)

  console.log('render')

  useEffect(() => {
    console.log('text useEffect')
    document.title = text
  }, [text])

  return (
    <div className="Input">
      <input type="text" value={text} onChange={(event) => setText(event.target.value)} />

      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <p>Showing</p>}
    </div>
  );
};

export default Input;