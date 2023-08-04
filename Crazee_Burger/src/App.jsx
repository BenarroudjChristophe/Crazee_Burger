import { useState } from "react";

function App() {
	const [input, setInput] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		alert(input);
		setInput("");
	};

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	return (
		<>
			<h1>Bienvenue chez vous</h1>
			<h2>Connectez vous</h2>

			<form action='submit' onSubmit={handleSubmit}>
				<input
					onChange={handleChange}
					type='text'
					value={input}
					placeholder='Entrez votre prénom...'
					required
				/>
				<button>Accéder à votre espace </button>
			</form>
		</>
	);
}

export default App;
