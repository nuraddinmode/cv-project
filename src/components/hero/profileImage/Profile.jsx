import { Data } from "/src/data.js";
import "./Profile.css"

export default function Profile({ currentLang }) {
  const content = Data[currentLang];

  return (
    <div className="hero__box" id="hero__box_id">
      <img
        className="hero__box-img"
        id="hero__box-img_id"
        alt=""
        src={content.image}
      />
    </div>
  );
}
