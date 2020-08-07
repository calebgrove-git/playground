import React from 'react';
import HelloWorld from './state-drills/HelloWorld.js';
import Bomb from './state-drills/Bomb.js';
import RouletteGun from './state-drills/RouletteGun';
import Tabs from './state/Tabs';
import Accordion from './state-drills/Accordion';

const tabsProp = [
  {
    name: 'First tab',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.',
  },
  {
    name: 'Second tab',
    content:
      'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    name: 'Third tab',
    content:
      'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.',
  },
];
const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content:
      'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content:
      'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
];
function App() {
  return (
    <div className='App'>
      <HelloWorld buttons={['friend', 'react', 'world']} />
      <Bomb />
      <RouletteGun bullet={8} />
      <Tabs tabs={tabsProp} />
      <Accordion sections={sections} />
    </div>
  );
}

export default App;
