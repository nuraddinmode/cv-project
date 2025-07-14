import { Data } from "/src/data.js";
import "./Description.css";

export default function HeroDescription({ currentLang }) {
  const content = Data[currentLang];

  return (
    <p id="hero__description_id">
      {content.heroDescription}

      <br />
      <br />

      <b>Hard skills: </b>

      {content.hardSkills}
    </p>
  );
}
