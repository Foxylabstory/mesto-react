import { Link } from "react-router-dom";
import logoPath from "../images/header/mesto-russia-logo.svg";

export default function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" alt="Логотип сайта" src={logoPath} />
      <div className="header__container">
        {props.isLoggedIn ? (
          <p className="header__email">email@mail.com</p>
        ) : (
          <></>
        )}
        <Link className="header__link" to={props.link}>
          {props.linkText}
        </Link>
      </div>
    </header>
  );
}
