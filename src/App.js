import React from 'react';
import HelloWorld from './state-drills/HelloWorld.js';
import Bomb from './state-drills/Bomb.js';
import RouletteGun from './state-drills/RouletteGun';
function App() {
  return (
    <div className='App'>
      <HelloWorld buttons={['friend', 'react', 'world']} />
      <Bomb />
      <RouletteGun bullet={8} />
    </div>
  );
}

export default App;
