import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
	const [inputValue, setInputValue] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		setInputValue("");
		navigate(`order/${inputValue}`);
	};

	const handleChange = (e) => {
		setInputValue(e.target.value);
	};

	return (
		<LoginFormStyled action='submit' onSubmit={handleSubmit}>
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
		</LoginFormStyled>
	);
}

const LoginFormStyled = styled.form`
border; 1px solid red
`;
