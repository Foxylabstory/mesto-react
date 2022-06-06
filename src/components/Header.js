import logoPath from "../images/header/mesto-russia-logo.svg";

export default function Header() {
  return (
    <>
      <header className="header">
        <img className="header__logo" alt="Логотип сайта" src={logoPath} />
      </header>
    </>
  );
}