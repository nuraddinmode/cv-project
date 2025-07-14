import { Data } from "/src/data.js";

export default function Techs({ currentLang }) {
  const content = Data[currentLang];

  return <p id="techs_id">Techs: {content.techs.join(", ")}</p>;
}
