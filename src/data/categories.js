// src/data/categories.js

export const categories = [
  {
    name: "Mouvement de Caméra",
    subCategories: [
      {
        name: "Types de Mouvement",
        keywords: [
          {
            name: "Plan fixe",
            description: "Caméra immobile.",
            prompt: "Plan fixe",
            suggestions: ["Silhouette"]
          },
          {
            name: "Travelling",
            description: "Mouvement latéral de la caméra.",
            prompt: "Travelling",
            suggestions: []
          },
          {
            name: "Dolly",
            description: "Caméra se déplaçant vers l'avant ou l'arrière.",
            prompt: "Dolly",
            suggestions: []
          },
          {
            name: "Pan",
            description: "Rotation horizontale de la caméra.",
            prompt: "Pan",
            suggestions: []
          },
          {
            name: "Tilt",
            description: "Rotation verticale de la caméra.",
            prompt: "Tilt",
            suggestions: []
          },
          {
            name: "Hyper-speed",
            description: "Accélère considérablement la vitesse de la caméra.",
            prompt: "Hyper-speed",
            suggestions: ["Action rapide", "Dynamique"]
          },
          {
            name: "Slow Motion",
            description: "Ralentit le mouvement de la caméra.",
            prompt: "Slow Motion",
            suggestions: ["Dramatique", "Intensité"]
          },
        ],
      },
      // Ajoutez d'autres sous-catégories si nécessaire
    ],
  },
  {
    name: "Éclairage",
    subCategories: [
      {
        name: "Types d'Éclairage",
        keywords: [
          {
            name: "Lumière naturelle",
            description: "Éclairage provenant de sources naturelles comme le soleil.",
            prompt: "Lumière naturelle",
            suggestions: []
          },
          {
            name: "Contre-jour",
            description: "Éclairage venant de l'arrière, créant des silhouettes.",
            prompt: "Contre-jour",
            suggestions: ["Silhouette", "Backlight"]
          },
          {
            name: "Éclairage diffus",
            description: "Éclairage doux et homogène sans ombres dures.",
            prompt: "Éclairage diffus",
            suggestions: []
          },
          {
            name: "Éclairage latéral",
            description: "Éclairage venant des côtés, créant des ombres et de la profondeur.",
            prompt: "Éclairage latéral",
            suggestions: []
          },
          {
            name: "Low-key",
            description: "Éclairage sombre avec des zones d'ombre prononcées.",
            prompt: "Low-key",
            suggestions: ["Dramatique", "Mystérieux"]
          },
          {
            name: "High-key",
            description: "Éclairage lumineux avec peu ou pas d'ombres.",
            prompt: "High-key",
            suggestions: ["Léger", "Aérien"]
          },
        ],
      },
    ],
  },
  {
    name: "Style Visuel",
    subCategories: [
      {
        name: "Styles",
        keywords: [
          {
            name: "Atmosphérique",
            description: "Créer une ambiance particulière ou une atmosphère.",
            prompt: "Atmosphérique",
            suggestions: []
          },
          {
            name: "Cinématographique",
            description: "Style rappelant les films professionnels.",
            prompt: "Cinématographique",
            suggestions: []
          },
          {
            name: "Documentaire",
            description: "Style réaliste et informatif.",
            prompt: "Documentaire",
            suggestions: []
          },
          {
            name: "Rétro",
            description: "Style évoquant une époque passée.",
            prompt: "Rétro",
            suggestions: []
          },
          {
            name: "Futuriste",
            description: "Style évoquant le futur ou la technologie avancée.",
            prompt: "Futuriste",
            suggestions: []
          },
        ],
      },
    ],
  },
  {
    name: "Effets Spéciaux",
    subCategories: [
      {
        name: "Effets",
        keywords: [
          {
            name: "Slow Motion",
            description: "Ralentit l'action pour un effet dramatique.",
            prompt: "Slow Motion",
            suggestions: ["Dramatique", "Intensité"]
          },
          {
            name: "Timelapse",
            description: "Accélère le temps pour montrer le changement rapide.",
            prompt: "Timelapse",
            suggestions: ["Dynamique", "Rapide"]
          },
          {
            name: "Hyper-speed",
            description: "Accélère considérablement l'action.",
            prompt: "Hyper-speed",
            suggestions: ["Action rapide", "Dynamique"]
          },
        ],
      },
    ],
  },
  {
    name: "Personnages",
    subCategories: [
      {
        name: "Types de Personnages",
        keywords: [
          {
            name: "Détective noir",
            description: "Personnage type des films noirs.",
            prompt: "Détective noir",
            suggestions: ["Mystérieux", "Sombre"]
          },
          {
            name: "Superhéros",
            description: "Personnage avec des pouvoirs extraordinaires.",
            prompt: "Superhéros",
            suggestions: ["Puissant", "Dynamique"]
          },
          {
            name: "Explorateur",
            description: "Personnage en quête d'aventure et de découverte.",
            prompt: "Explorateur",
            suggestions: ["Aventureux", "Curieux"]
          },
          {
            name: "Robot",
            description: "Personnage mécanique ou cybernétique.",
            prompt: "Robot",
            suggestions: ["Futuriste", "Technologique"]
          },
          {
            name: "Fantôme",
            description: "Présence surnaturelle et éthérée.",
            prompt: "Fantôme",
            suggestions: ["Mystérieux", "Surnaturel"]
          },
        ],
      },
    ],
  },
  // Ajoutez d'autres catégories si nécessaire
];
