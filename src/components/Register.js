import Header from "./Header";
import Sign from "./Sign";

const Register = () => {
 
  return (
    <>
      <Header link={"/sign-in"} linkText={"Войти"} />
      <Sign
        header="Регистрация"
        buttonText="Зарегистрироваться"
        hidden={false}
      />
    </>
  );
};
export default Register;
