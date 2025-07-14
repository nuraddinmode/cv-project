import { useState } from "react";
import "./Hero.css";
import { Data } from "/src/data.js";
import LangSwitcher from "./langSwitcher/LangSwitcher.jsx";
import Description from "./description/Description.jsx";
import Techs from "./techs/Techs.jsx";
import Contact from "./contactMessage/ContactMessage.jsx";
import Links from "./links/Links.jsx";
import Cv from "./cv/Cv.jsx";
import Profile from "./profileImage/Profile.jsx";

export default function Hero() {
  const [lang, setLang] = useState("en");
  const content = Data[lang];

  return (
    <div className="hero" id="hero_id">
      <div className="container hero__container" id="hero__container_id">
        <div className="hero__about">
          <h1 className="hero__title" id="hero__title_id">
            {content.heroTitle}
          </h1>
          <h2 className="hero__subtitle" id="hero__subtitle_id">
            {content.heroSubtitle}
          </h2>
          <Description currentLang={lang} />
          <Techs currentLang={lang} />
          <Contact currentLang={lang} />
          <Links currentLang={lang} />
          <Cv />
          <LangSwitcher onLangChange={setLang} />
        </div>
        <Profile currentLang={lang} />
      </div>
    </div>
  );
}
