import React from 'react';
import { useState } from 'react';

export default function HelloWorld(props) {
  const [who, setWho] = useState('World');

  const buttons = props.buttons.map((button, _) => (
    <button key={button} onClick={() => setWho(button)}>
      {button}
    </button>
  ));

  return (
    <div>
      <p>Hello, {who}!</p>
      {buttons}
    </div>
  );
}
