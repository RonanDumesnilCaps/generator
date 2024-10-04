// src/components/AddScene.js

import React, { useState } from 'react';

const AddScene = ({ addScene }) => {
  const [scene, setScene] = useState('');

  const handleAdd = () => {
    if (scene.trim() !== '') {
      addScene(scene.trim());
      setScene('');
    }
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Ajouter une Scène Personnalisée</h2>
      <div className="flex">
        <input
          type="text"
          value={scene}
          onChange={(e) => setScene(e.target.value)}
          className="flex-1 border rounded-l p-2 dark:bg-gray-600 dark:text-white"
          placeholder="Décrivez votre scène..."
        />
        <button
          onClick={handleAdd}
          className="bg-green-500 text-white px-4 py-2 rounded-r hover:bg-green-600"
        >
          Ajouter
        </button>
      </div>
    </div>
  );
};

export default AddScene;
