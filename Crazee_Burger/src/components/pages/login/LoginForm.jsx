import { useState } from "react";
import { Link } from "react-router-dom";

function LoginForm() {
	const [inputValue, setInputValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
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
			<Link to={`/order/${inputValue}`}>
				<button>Accéder à votre espace</button>
			</Link>
		</form>
	);
}

export default LoginForm;
