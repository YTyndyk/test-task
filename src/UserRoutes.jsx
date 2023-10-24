import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TablePage from "./pages/TablePage";

const UserRoutes = () => {
	<Suspense fallback={<p>....Load page</p>}>
		<Routes>
			<Route path="/login" element={<LoginPage />} />
			<Route path="/table" element={<TablePage />} />
			{/* <Route path="/posts/:id" element={<SingleTablePage />} /> */}
		</Routes>
	</Suspense>;
};

export default UserRoutes;
