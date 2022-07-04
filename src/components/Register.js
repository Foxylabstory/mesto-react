import Header from "./Header";
import Sign from "./Sign";

const Register = (props) => {

   return (
    <>
      <Header link={"/sign-in"} linkText={"Войти"} />
      <Sign
        header="Регистрация"
        buttonText="Зарегистрироваться"
        hidden={false}
        handleSubmit={props.handleRegister}
      />
    </>
  );
};
export default Register;
