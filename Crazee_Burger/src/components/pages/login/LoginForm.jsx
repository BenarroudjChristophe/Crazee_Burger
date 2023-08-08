import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
	width: 464px;
	height: 438.313px;
	flex-shrink: 0;
	border-radius: 5px;

	h1 {
		// color: #fff;
		text-align: center;
		font-family: Amatic SC;
		font-size: 3rem;
		font-style: normal;
		font-weight: 700;
		line-height: 3.8125rem; /* 127.083% */
	}
`;
