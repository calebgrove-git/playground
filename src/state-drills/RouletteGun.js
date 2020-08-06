import React, { useState, useEffect } from 'react';

export default function RouletteGun(props) {
  const [chamber, setChamber] = useState(null);
  const [spinning, setSpinning] = useState(false);
  const [cleared, setCleared] = useState(null);
  useEffect(() => {
    var timeout;
    if (spinning === true) {
      timeout = setTimeout(() => {
        setChamber(Math.ceil(Math.random() * 8));
        setSpinning(false);
      }, 2000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [spinning]);

  const returns = () => {
    if (spinning === true) {
      return 'spinning the chamber and pulling the trigger';
    } else if (chamber === props.bullet) {
      return 'bang!';
    } else if (chamber != props.bullet && chamber != null) {
      return "you're safe";
    } else {
      return 'pull the trigger';
    }
  };
  return (
    <div>
      <p>{returns()}</p>
      <button onClick={() => setSpinning(true)}> Pull the trigger</button>
      <p>{cleared}</p>
    </div>
  );
}
