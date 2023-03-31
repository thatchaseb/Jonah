import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'border-blue-400' : '';

    return (
      <React.Fragment key={item.title}>
        <div className={`cursor-pointer select-none ml-8 mx-2 p-1 border-b-4 border-white hover:border-blue-500 transition ease-out duration-300 ${active}`} onClick={() => onTitleClick(index)}>
          {item.title}
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="flex justify-evenly text-md pointer text-gray-600">
      {renderedItems}
    </div>
  )
};

export default Accordion;