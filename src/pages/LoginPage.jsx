import { useDispatch } from "react-redux";
import LoginForm from "../modules/LoginForm/LoginForm";
import { login } from "../redux/auth/auth-operations";
import styles from "../modules/LoginForm/login-form.module.scss";

const LoginPage = () => {
	const dispatch = useDispatch();

	const onLogin = (data) => {
		dispatch(login(data));
	};
	return (
		<div>
			<h1>Login Page</h1>
			<div className={styles.picture}>
				<LoginForm onSubmit={onLogin} />
				<img
					className={styles.image}
					src="https://img2.joyreactor.cc/pics/post/%D1%82%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D1%8B-%D0%BC%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%8B-%D1%81%D0%B4%D0%B5%D0%BB%D0%B0%D0%B9-%D1%81%D0%B0%D0%BC-138920.jpeg"
					alt="photo table"
					width={300}
					height={300}
				/>
			</div>
		</div>
	);
};
export default LoginPage;
