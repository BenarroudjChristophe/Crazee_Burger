import ErrorPage from "./components/pages/ErrorPage";
import OrderPage from "./components/pages/OrderPage";
import LoginPage from "./components/pages/login/LoginPage";
import { Routes, Route } from "react-router-dom";
function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<LoginPage />} />
				<Route path='/order/:name' element={<OrderPage />} />
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</>
	);
}

export default App;
