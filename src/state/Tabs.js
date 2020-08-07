import React, { useState } from 'react';

Tabs.defaultProps = {
  tabs: [],
};
export default function Tabs(props) {
  const [index, setIndex] = useState(0);

  const buttons = props.tabs.map((button, i) => {
    return (
      <button key={i} onClick={() => handleButtons(i)}>
        {button.name}
      </button>
    );
  });
  const renderContent = () => {
    const currentTab = props.tabs[index];
    return <div className='content'>{currentTab.content}</div>;
  };
  const handleButtons = (i) => {
    setIndex(i);
  };

  return (
    <div>
      {buttons}
      {!!props.tabs.length && renderContent()}
    </div>
  );
}
