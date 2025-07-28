import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="header__title">
          <p>Ibrahimov Nuraddin</p>
        </div>
        <div className="header__nav">
          <Link to={"/"} className="header__paragraph">
            <p>Главная</p>
          </Link>
          <Link to={"/aboutUs"} className="header__paragraph">
            <p>О нас</p>
          </Link>
          <Link to={"/services"} className="header__paragraph">
            <p>Услуги</p>
          </Link>
          <Link to={"/contacts"} className="header__paragraph">
            <p>Контакты</p>
          </Link>
        </div>
      </div>

      <Outlet />
    </>
  );
}
