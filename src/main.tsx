import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

ReactDOM.createRoot(document.getElementById("application")!).render(
  <React.StrictMode>
    <main className="flex flex-col gap-6 min-h-screen min-w-full p-12 dark:bg-gray-800">
      <p>
        👀 Le design de l'application à réaliser est disponible à l'adresse
        suivante
      </p>
      <a href="https://www.figma.com/community/file/1307081115139150940/projet-programmation-web-avancee">
        Lien vers figma
      </a>
    </main>
  </React.StrictMode>
);
