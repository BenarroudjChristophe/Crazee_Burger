import { useState } from "react";

function LoginForm() {
	const [inputValue, setInputValue] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Bonjour " + inputValue);

		setInputValue("");
	};

	const handleChange = (e) => {
		setInputValue(e.target.value);
	};

	return (
		<form action='submit' onSubmit={handleSubmit}>
			<h1>Bienvenue chez nous !</h1>
			<br />
			<h2>Connectez-vous</h2>
			<input
				onChange={handleChange}
				type='text'
				value={inputValue}
				placeholder='Entrez votre prénom...'
				required
			/>
			<button>Accéder à votre espace</button>
		</form>
	);
}

export default LoginForm;
