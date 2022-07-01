import { Link } from "react-router-dom";
import Sign from "./Sign";

const SignIn = () => {
    return (
        <>
        <Sign header="Регистрация" buttonText="Зарегистрироваться" hidden={false} />
        <Link to="/cards">click</Link>
        </>
    )
};
export default SignIn;