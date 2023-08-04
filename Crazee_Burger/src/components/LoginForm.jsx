function LoginForm({ inputValue, setInputValue }) {
	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Bonjour " + inputValue);

		setInputValue("");
	};

	const handleChange = (e) => {
		setInputValue(e.target.value);
	};

	return (
		<>
			<form action='submit' onSubmit={handleSubmit}>
				<input
					onChange={handleChange}
					type='text'
					value={inputValue}
					placeholder='Entrez votre prénom...'
					required
				/>
				<button>Accéder à votre espace</button>
			</form>
		</>
	);
}

export default LoginForm;
