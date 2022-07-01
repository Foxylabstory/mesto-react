import Header from "./Header";
import Sign from "./Sign";

const Login = () => {
  
  return (
    <>
      <Header link={"/sign-up"} linkText={"Регистрация"} />
      <Sign header="Вход" buttonText="Войти" hidden={true} />
    </>
  );
};
export default Login;
