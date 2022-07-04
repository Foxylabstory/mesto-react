import { Link } from "react-router-dom";
import { useState } from "react";

const Sign = (props) => {
  /*const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");*/
  const [authorizationData, setAuthorizationData] = useState({
    password: "",
    email: ""
  });

  //const [message, setMessage] = useState("")

  const handleChange = (event) => {
    const {name, value} = event.target;
    setAuthorizationData((oldData) => ({
      ...oldData,
      [name]: value 
    }));
  }
/*
  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }
*/
  const handleSubmit = (event) => {
    event.preventDefault();
    let { password, email } = authorizationData;
    console.log(password, email);
    props.handleSubmit( password, email );
    setAuthorizationData({
      password: "",
      email: ""
    })
    
    /*props.onAction({
      email,
      password,
    });*/
  }
/*
  useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);
*/
  return (
    <form className="sign" onSubmit={handleSubmit}>
      <fieldset className="sign__fieldset">
        <h2 className="sign__header">{props.header}</h2>
        <label className="ol sign__label" htmlFor="email"></label>
        <input
          id="email"
          name="email"
          className="sign__input"
          placeholder="Email"
          type="email"
          required
          value={authorizationData.email}
          onChange={handleChange}
        ></input>
        <span id="email-error" className="ol sign__input-error"></span>
        <label className="ol sign__label" htmlFor="password"></label>
        <input
          id="password"
          name="password"
          className="sign__input"
          placeholder="Пароль"
          type="password"
          required
          value={authorizationData.password}
          onChange={handleChange}
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
