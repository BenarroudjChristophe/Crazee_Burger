import LoginForm from "../LoginForm";
import { useState } from "react";

export default function LoginPage() {
	const [inputValue, setInputValue] = useState("");

	return (
		<>
			<h1>Bienvenue chez nous !</h1>
			<br />
			<h2>Connectez-vous</h2>
			<LoginForm inputValue={inputValue} setInputValue={setInputValue} />
		</>
	);
}
