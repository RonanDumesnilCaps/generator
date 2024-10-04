// src/components/PromptPreview.js

import React from 'react';

const PromptPreview = ({ prompt, selectedKeywords }) => {
  if (!prompt) return <p className="text-gray-500">Votre prompt apparaîtra ici...</p>;

  let highlightedPrompt = prompt;
  selectedKeywords.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'g');
    highlightedPrompt = highlightedPrompt.replace(
      regex,
      `<span class="bg-yellow-200">${keyword}</span>`
    );
  });

  return (
    <div
      className="w-full border rounded p-4 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
      dangerouslySetInnerHTML={{ __html: highlightedPrompt }}
    ></div>
  );
};

export default PromptPreview;
