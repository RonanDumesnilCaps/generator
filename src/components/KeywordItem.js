// src/components/KeywordItem.js

import React from 'react';

const KeywordItem = ({ keyword, isSelected, toggleSelect }) => {
  return (
    <div className="flex items-start mb-2">
      <input
        type="checkbox"
        id={keyword.name}
        checked={isSelected}
        onChange={() => toggleSelect(keyword)}
        className="mt-1 mr-2"
      />
      <label htmlFor={keyword.name} className="cursor-pointer">
        <span className="font-semibold">{keyword.name}</span>
        <p className="text-sm text-gray-600">{keyword.description}</p>
      </label>
    </div>
  );
};

export default KeywordItem;
