import React, { useState, useEffect } from "react";
import "./StyledTitle.css";

function StyledTitle() {
  const words = [
    "¡Hola allí!",
    "Salut là-bas!",
    "Hallo dort!",
    "Ciao là!",
    "こんにちは!",
    "Cześć tam!",
    "Olá lá!",
    "Привіт там!",
    "Hallo daar!",
    "Hej där!",
    "Merhaba orada!",
    "안녕하세요!",
    "你好！",
    "سلام!",
    "Γεια σου!",
    "שלום!",
    "नमस्ते!",
    "สวัสดี!",
    "Helló!",
    "Ahoj tam!",
    "Tere seal!",
  ];

  const [currentWord, setCurrentWord] = useState(words[0]);
  const wordChangeInterval = 5000;

  useEffect(() => {
    let intervalId;

    function changeWord() {
      setCurrentWord((prevWord) => {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * words.length);
        } while (words[newIndex] === prevWord);
        return words[newIndex];
      });
    }

    function startInterval() {
      changeWord();
      intervalId = setInterval(changeWord, wordChangeInterval);
    }

    function handleVisibilityChange() {
      if (document.hidden) {
        clearInterval(intervalId);
      } else {
        setCurrentWord(words[0]);
        clearInterval(intervalId);
        startInterval();
      }
    }

    startInterval();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(intervalId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="portfolio__styledTitle_container">
      <svg className="portfolio_svg" viewBox="0 0 2000 300">
        <text
          className="portfolio_svg_text"
          x="50%"
          y="50%"
          dy=".35em"
          textAnchor="middle"
        >
          {currentWord}
        </text>
      </svg>
    </div>
  );
}

export default StyledTitle;
