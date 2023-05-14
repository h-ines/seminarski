import React, { useState, useEffect } from "react";
import "./App.css";
import MyChatApp from "./components/MyChatApp";

export default function App() {
  const [showSvg, setShowSvg] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowSvg(false);
    }, 6000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      {showSvg && (
        <svg width="100%" height="100%">
          <rect width="100%" height="100%" fill="white" />
          <text x="50%" y="50%" fill="white" textAnchor="middle">
            Chat App
          </text>
        </svg>
      )}
      <MyChatApp />
    </div>
  );
}
