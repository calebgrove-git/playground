import React from 'react';
import { useState, useEffect } from 'react';

export default function Bomb(props) {
  const [count, setCount] = useState(0);
  let interval = null;
  useEffect(() => {
    interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const display = () => {
    if (count >= 8) {
      return 'Boom!';
    } else if (count % 2 === 0) {
      return 'tick';
    } else {
      return 'tock';
    }
  };
  if (count > 8) {
    setCount(0);
  }

  return (
    <div>
      <p>{display()}</p>
    </div>
  );
}
