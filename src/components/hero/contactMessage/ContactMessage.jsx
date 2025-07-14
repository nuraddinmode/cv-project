import { Data } from "/src/data.js";

export default function Contact({ currentLang }) {
  const content = Data[currentLang];

  return <p id="contact_message">{content.contactMessage}</p>;
}
