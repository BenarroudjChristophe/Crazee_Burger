function LoginForm({ input, setInput }) {
	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Bonjour " + input);

		setInput("");
	};

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	return (
		<>
			<form action='submit' onSubmit={handleSubmit}>
				<input
					onChange={handleChange}
					type='text'
					value={input}
					placeholder='Entrez votre prénom...'
					required
				/>
				<button>Accéder à votre espace</button>
			</form>
		</>
	);
}

export default LoginForm;
