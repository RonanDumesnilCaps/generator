// src/components/Dropdown.js

import React from 'react';
import KeywordItem from './KeywordItem';

const Dropdown = ({ category, selected, setSelected }) => {
  const toggleSelect = (keyword) => {
    const isSelected = selected.includes(keyword.name);
    if (isSelected) {
      setSelected(selected.filter(item => item !== keyword.name));
    } else {
      setSelected([...selected, keyword.name]);
    }
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
      {category.subCategories.map(sub => (
        <div key={sub.name} className="mb-4">
          <h3 className="text-lg font-medium mb-1">{sub.name}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {sub.keywords.map(keyword => (
              <KeywordItem
                key={keyword.name}
                keyword={keyword}
                isSelected={selected.includes(keyword.name)}
                toggleSelect={toggleSelect}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
