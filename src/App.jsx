import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import "./App.css";
// import LoginPage from "./pages/LoginPage";
import Navbar from "./modules/NavBar";
import UserRoutes from "./UserRoutes";
// import UserRoutes from "./UserRoutes";

function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<Navbar />
					<UserRoutes />
				</BrowserRouter>
			</PersistGate>
		</Provider>
	);
}

export default App;
