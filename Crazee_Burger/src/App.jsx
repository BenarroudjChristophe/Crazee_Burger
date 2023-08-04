import { useState } from "react";
import LoginForm from "./components/LoginForm";

function App() {
	const [input, setInput] = useState("");

	return (
		<>
			<h1>Bienvenue chez vous</h1>
			<h2>Connectez vous</h2>

			<LoginForm input={input} setInput={setInput} />
		</>
	);
}

export default App;
