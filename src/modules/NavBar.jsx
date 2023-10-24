import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { isUserLogin } from "../../src/redux/auth/auth-selectors";
import LoginPage from "../pages/LoginPage";
import TablePage from "../pages/TablePage";

const Navbar = () => {
	const isLogin = useSelector(isUserLogin);

	return (
		<div>
			<Link to="/login"></Link>
			{!isLogin && <LoginPage />}
			{isLogin && <TablePage />}
		</div>
	);
};

export default Navbar;
