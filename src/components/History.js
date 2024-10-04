// src/components/History.js

import React from 'react';

const History = ({ history, selectHistory }) => {
  if (history.length === 0) return null;

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Historique des Prompts</h2>
      <ul className="list-disc list-inside">
        {history.map((item, index) => (
          <li key={index} className="cursor-pointer text-blue-600 hover:underline" onClick={() => selectHistory(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
