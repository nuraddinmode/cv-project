import { useState } from "react";
import "./LangSwitcher.css";

export default function LangSwitcher({ onLangChange }) {
  const [lang, setLang] = useState("en");

  const handleClick = (newLang) => {
    setLang(newLang);
    if (onLangChange) onLangChange(newLang);
  };
  return (
    <div className="language-switcher">
      <button
        id="btn-en"
        className={lang === "en" ? "active" : ""}
        onClick={() => handleClick("en")}
      >
        English
      </button>
      <button
        id="btn-ru"
        className={lang === "ru" ? "active" : ""}
        onClick={() => handleClick("ru")}
      >
        Русский
      </button>
    </div>
  );
}
