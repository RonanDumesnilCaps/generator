// src/App.js

import React, { useState, useEffect } from 'react';
import Dropdown from './components/Dropdown';
import { categories as initialCategories } from './data/categories';
import Suggestions from './components/Suggestions';
import PromptPreview from './components/PromptPreview';
import AddScene from './components/AddScene';
import History from './components/History';
import { Shuffle, RefreshCcw } from 'lucide-react';

function App() {
  const [categories, setCategories] = useState(initialCategories);
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [additionalDetails, setAdditionalDetails] = useState('');
  const [prompt, setPrompt] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [history, setHistory] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    generatePrompt();
    generateSuggestions();
    // Ajouter le prompt à l'historique si nécessaire
    // Eviter d'ajouter les prompts vides
    if (prompt.trim() !== '' && !history.includes(prompt)) {
      setHistory([prompt, ...history]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedKeywords, additionalDetails]);

  const generatePrompt = () => {
    let promptParts = [];
    selectedKeywords.forEach(keyword => {
      const found = findKeywordByName(keyword);
      if (found) {
        promptParts.push(found.prompt);
      } else {
        // Scènes personnalisées
        promptParts.push(keyword);
      }
    });
    if (additionalDetails) {
      promptParts.push(additionalDetails);
    }
    const finalPrompt = promptParts.join('. ');
    setPrompt(finalPrompt);
  };

  const findKeywordByName = (name) => {
    for (let category of categories) {
      for (let sub of category.subCategories) {
        for (let keyword of sub.keywords) {
          if (keyword.name === name) return keyword;
        }
      }
    }
    return null;
  };

  const generateSuggestions = () => {
    let allSuggestions = [];
    selectedKeywords.forEach(keyword => {
      const found = findKeywordByName(keyword);
      if (found && found.suggestions) {
        allSuggestions = [...allSuggestions, ...found.suggestions];
      }
    });
    // Supprimer les doublons et exclure les mots déjà sélectionnés
    const uniqueSuggestions = [...new Set(allSuggestions)].filter(s => !selectedKeywords.includes(s));
    setSuggestions(uniqueSuggestions);
  };

  const generateRandomCameraMovement = () => {
    const cameraCategory = categories.find(cat => cat.name === "Mouvement de Caméra");
    if (cameraCategory) {
      const movementSub = cameraCategory.subCategories.find(sub => sub.name === "Types de Mouvement");
      if (movementSub) {
        const cameraOptions = movementSub.keywords;
        const randomKeyword = cameraOptions[Math.floor(Math.random() * cameraOptions.length)].name;
        toggleKeyword(randomKeyword);
      }
    }
  };

  const toggleKeyword = (keyword) => {
    if (selectedKeywords.includes(keyword)) {
      setSelectedKeywords(selectedKeywords.filter(k => k !== keyword));
    } else {
      setSelectedKeywords([...selectedKeywords, keyword]);
    }
  };

  const resetSelections = () => {
    setSelectedKeywords([]);
    setAdditionalDetails('');
    setPrompt('');
    setSuggestions([]);
  };

  const addScene = (scene) => {
    setSelectedKeywords([...selectedKeywords, scene]);
  };

  const selectHistory = (selectedPrompt) => {
    // Réinitialiser les sélections et définir le prompt à partir de l'historique
    resetSelections();
    // Extraire les mots-clés du prompt
    const parts = selectedPrompt.split('. ');
    const keywords = [];
    const details = [];
    parts.forEach(part => {
      const keyword = findKeywordByName(part);
      if (keyword) {
        keywords.push(part);
      } else {
        details.push(part);
      }
    });
    setSelectedKeywords(keywords);
    setAdditionalDetails(details.join('. '));
  };

  useEffect(() => {
    if (prompt.trim() !== '' && !history.includes(prompt)) {
      setHistory([prompt, ...history]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prompt]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen p-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 p-6 rounded shadow">
        <div className="flex justify-between items-center mb-6">
          <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Générateur de Prompts pour Runway Gen-3
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded"
          >
            {darkMode ? '🌞 Clair' : '🌙 Sombre'}
          </button>
        </div>
        
        {/* Ajouter une Scène Personnalisée */}
        <AddScene addScene={addScene} />

        {/* Affichage des Catégories et Mots-Clés */}
        {categories.map(category => (
          <Dropdown
            key={category.name}
            category={category}
            selected={selectedKeywords}
            setSelected={setSelectedKeywords}
          />
        ))}

        {/* Suggestions Intelligentes */}
        <Suggestions 
          suggestions={suggestions} 
          selectSuggestion={toggleKeyword}
        />

        {/* Détails Supplémentaires */}
        <div className="mb-6">
          <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">Détails supplémentaires</label>
          <textarea
            value={additionalDetails}
            onChange={(e) => setAdditionalDetails(e.target.value)}
            className="w-full border rounded p-2 dark:bg-gray-600 dark:text-white"
            rows="3"
            placeholder="Ajoutez des détails supplémentaires ici..."
          ></textarea>
        </div>

        {/* Boutons de Contrôle */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={generateRandomCameraMovement}
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            <Shuffle className="mr-2" /> Mouvement Aléatoire
          </button>
          <button
            onClick={resetSelections}
            className="flex items-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            <RefreshCcw className="mr-2" /> Réinitialiser
          </button>
        </div>

        {/* Aperçu du Prompt Généré */}
        <div className="mb-6">
          <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">Prompt Généré</label>
          <PromptPreview prompt={prompt} selectedKeywords={selectedKeywords} />
        </div>

        {/* Historique des Prompts */}
        <History history={history} selectHistory={selectHistory} />
      </div>
    </div>
  );
}

export default App;
