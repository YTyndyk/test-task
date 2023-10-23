import styles from "./text-field.module.scss";

const TextField = ({ label, ...props }) => {
	return (
		<div className={styles.form}>
			<label>{label}</label>
			<input className={styles.field} {...props} />
		</div>
	);
};

export default TextField;
