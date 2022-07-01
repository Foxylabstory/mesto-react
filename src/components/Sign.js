import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Sign = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email);
    console.log(password);
    /*props.onAction({
      email,
      password,
    });*/
  }

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);

  return (
    <form className="sign" onSubmit={handleSubmit}>
      <fieldset className="sign__fieldset">
        <h2 className="sign__header">{props.header}</h2>
        <label className="ol sign__label" htmlFor="email"></label>
        <input
          id="email"
          className="sign__input"
          placeholder="Email"
          type="email"
          required
          value={email}
          onChange={handleChangeEmail}
        ></input>
        <span id="email-error" className="ol sign__input-error"></span>
        <label className="ol sign__label" htmlFor="password"></label>
        <input
          id="password"
          className="sign__input"
          placeholder="Пароль"
          type="password"
          required
          value={password}
          onChange={handleChangePassword}
        ></input>
        <span className="ol sign__input-error" id="password-error"></span>
        <button className="sign__submit-button" type="submit">
          {props.buttonText}
        </button>
        <div
          className={`sign__question-container  ${
            props.hidden && "sign__question-container_hidden"
          }`}
        >
          <span className="sign__question">Уже зарегистрированы?</span>
          <Link className="sign__redirect" to="/sign-in">
            Войти
          </Link>
        </div>
      </fieldset>
    </form>
  );
};

export default Sign;
