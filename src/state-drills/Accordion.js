import React, { useState } from 'react';

Accordion.defaultProps = {
  sections: [],
};

export default function Accordion(props) {
  const [index, setIndex] = useState(null);
  const renderContent = () => {
    return <p>{props.sections[index].content}</p>;
  };
  const buttons = props.sections.map((button, i) => {
    return (
      <li key={i}>
        <button key={i} onClick={() => setIndex(i)}>
          {button.title}
        </button>
        {!!props.sections.length && i === index && renderContent()}
      </li>
    );
  });
  return <ul>{buttons}</ul>;
}
