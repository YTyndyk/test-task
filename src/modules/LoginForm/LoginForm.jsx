import TextField from "../../shared/components/TextField/TextField";
import Button from "../../shared/components/Button/Button";

import useForm from "../../shared/hooks/useForm";

import initialState from "./initialState";
import fields from "./fields";
import styles from "./login-form.module.scss";

const LoginForm = ({ onSubmit }) => {
	const { state, handleChange, handleSubmit } = useForm({
		initialState,
		onSubmit,
	});

	const { name, password } = state;

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<TextField
				value={name}
				onChange={handleChange}
				{...fields.name}
			/>
			<TextField
				value={password}
				onChange={handleChange}
				{...fields.password}
			/>
			<Button>Login</Button>
		</form>
	);
};
export default LoginForm;
