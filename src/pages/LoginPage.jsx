import { useDispatch } from "react-redux";
import LoginForm from "../modules/LoginForm/LoginForm";
import { login } from "../redux/auth/auth-operations";

const LoginPage = () => {
	const dispatch = useDispatch();

	const onLogin = (data) => {
		dispatch(login(data));
	};
	return (
		<div>
			<h1>Login Page</h1>
			<LoginForm onSubmit={onLogin} />
		</div>
	);
};
export default LoginPage;
