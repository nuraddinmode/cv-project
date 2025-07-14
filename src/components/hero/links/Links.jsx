import { Data } from "/src/data.js";
import "./Links.css";

export default function Links({ currentLang }) {
  const content = Data[currentLang];

  return (
    <div className="hero__links" id="hero__links_id">
      <a className="hero__link" id="hero-link-vk" href={content.socialLinks.vk}>
        <i className="bx bxl-vk"></i>
      </a>
      <a
        className="hero__link"
        target="_blank"
        id="hero-link-instagram"
        href={content.socialLinks.instagram}
      >
        <i className="bx bxl-instagram"></i>
      </a>
      <a
        className="hero__link"
        target="_blank"
        id="hero-link-telegram"
        href={content.socialLinks.telegram}
      >
        <i className="bx bxl-telegram"></i>
      </a>
    </div>
  );
}
