import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import "./App.css";
import LoginPage from "./pages/LoginPage";

function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<LoginPage />
				</BrowserRouter>
			</PersistGate>
		</Provider>
	);
}

export default App;
