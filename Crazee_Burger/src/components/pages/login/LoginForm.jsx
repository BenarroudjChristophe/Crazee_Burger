import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import hoverCursor from '/images/Cursors.png'




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
					<span></span>
			
				<h2>Connectez-vous</h2>
					<div>
					
						<svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
  							<path d="M10.3125 5.89062C10.3125 6.63655 10.0162 7.35192 9.48874 7.87936C8.96129 8.40681 8.24592 8.70312 7.5 8.70312C6.75408 8.70312 6.03871 8.40681 5.51126 7.87936C4.98382 7.35192 4.6875 6.63655 4.6875 5.89062C4.6875 5.1447 4.98382 4.42933 5.51126 3.90189C6.03871 3.37444 6.75408 3.07813 7.5 3.07812C8.24592 3.07813 8.96129 3.37444 9.48874 3.90189C10.0162 4.42933 10.3125 5.1447 10.3125 5.89062Z" fill="#747B91"/>
  							<path fillRule="evenodd" clipRule="evenodd" d="M0 7.76562C0 5.7765 0.790176 3.86885 2.1967 2.46232C3.60322 1.0558 5.51088 0.265625 7.5 0.265625C9.48912 0.265625 11.3968 1.0558 12.8033 2.46232C14.2098 3.86885 15 5.7765 15 7.76562C15 9.75475 14.2098 11.6624 12.8033 13.0689C11.3968 14.4754 9.48912 15.2656 7.5 15.2656C5.51088 15.2656 3.60322 14.4754 2.1967 13.0689C0.790176 11.6624 0 9.75475 0 7.76562ZM7.5 1.20312C6.26417 1.20319 5.05347 1.55222 4.00725 2.21003C2.96104 2.86784 2.12183 3.8077 1.58622 4.92143C1.05061 6.03517 0.840362 7.2775 0.979686 8.50546C1.11901 9.73341 1.60224 10.8971 2.37375 11.8625C3.03938 10.79 4.50469 9.64062 7.5 9.64062C10.4953 9.64062 11.9597 10.7891 12.6263 11.8625C13.3978 10.8971 13.881 9.73341 14.0203 8.50546C14.1596 7.2775 13.9494 6.03517 13.4138 4.92143C12.8782 3.8077 12.039 2.86784 10.9927 2.21003C9.94653 1.55222 8.73583 1.20319 7.5 1.20312Z" fill="#747B91"/>
						</svg>
						<input
			
							onChange={handleChange}
							type='text'
							value={inputValue}
							placeholder='Entrez votre prénom...'
							required
						/>

					</div>
					
						<button>
						
							Accéder à votre espace 	&gt;
						</button>
					
			<h1>Bienvenue chez nous !</h1>
			<hr />
			<h1>Connectez-vous</h1>

			<div>
				<svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
					<path d="M10.3125 5.89062C10.3125 6.63655 10.0162 7.35192 9.48874 7.87936C8.96129 8.40681 8.24592 8.70312 7.5 8.70312C6.75408 8.70312 6.03871 8.40681 5.51126 7.87936C4.98382 7.35192 4.6875 6.63655 4.6875 5.89062C4.6875 5.1447 4.98382 4.42933 5.51126 3.90189C6.03871 3.37444 6.75408 3.07813 7.5 3.07812C8.24592 3.07813 8.96129 3.37444 9.48874 3.90189C10.0162 4.42933 10.3125 5.1447 10.3125 5.89062Z" fill="#747B91"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.76562C0 5.7765 0.790176 3.86885 2.1967 2.46232C3.60322 1.0558 5.51088 0.265625 7.5 0.265625C9.48912 0.265625 11.3968 1.0558 12.8033 2.46232C14.2098 3.86885 15 5.7765 15 7.76562C15 9.75475 14.2098 11.6624 12.8033 13.0689C11.3968 14.4754 9.48912 15.2656 7.5 15.2656C5.51088 15.2656 3.60322 14.4754 2.1967 13.0689C0.790176 11.6624 0 9.75475 0 7.76562ZM7.5 1.20312C6.26417 1.20319 5.05347 1.55222 4.00725 2.21003C2.96104 2.86784 2.12183 3.8077 1.58622 4.92143C1.05061 6.03517 0.840362 7.2775 0.979686 8.50546C1.11901 9.73341 1.60224 10.8971 2.37375 11.8625C3.03938 10.79 4.50469 9.64062 7.5 9.64062C10.4953 9.64062 11.9597 10.7891 12.6263 11.8625C13.3978 10.8971 13.881 9.73341 14.0203 8.50546C14.1596 7.2775 13.9494 6.03517 13.4138 4.92143C12.8782 3.8077 12.039 2.86784 10.9927 2.21003C9.94653 1.55222 8.73583 1.20319 7.5 1.20312Z" fill="#747B91"/>
				</svg>

			<input
				onChange={handleChange}
				type='text'
				value={inputValue}
				placeholder='Entrez votre prénom...'
				required
				/>
			</div>

			<button>Accéder à votre espace

				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
					<path d="M6.1875 3.54688L10.4062 7.76562L6.1875 11.9844" stroke="white" stroke-width="1.40625" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>

			</button>
		</LoginFormStyled>
	);
}

const LoginFormStyled = styled.form`
	
	
	display: flex; 
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 25rem;
	height: 27.39456rem;
	flex-shrink: 0;
	border-radius: 0.3125rem;
	margin-top: -4.51rem;


	 h1 {
		color: #FFF;
		text-align: center;
		font-family: Amatic SC;
		font-size: 3rem;
		font-style: normal;
		font-weight: 700;
		line-height: 3.8125rem; 
	 }

	 hr {
		width: 25rem;
		height: 0.1875rem;
		flex-shrink: 0;
		border: 1px solid #F56A2C;
		background: #F56A2C;
	 }

	 div {
		width: 22rem;
		display: inline-flex;
		padding: 1.125rem 1.5rem;
		align-items: center;
		gap: 0.79981rem;
		border-radius: 0.3125rem;
		background: #FFF;
		margin-bottom: 1.12rem;

			svg {
				display: flex;
				width: 0.9375rem;
				height: 0.9375rem;
				justify-content: center;
				align-items: center;				
			}

			input {
				display: flex;
				padding: 0.0625rem 0.125rem;
				justify-content: center;
				align-items: center;
				display: flex;
				padding-right: 0px;
				align-items: flex-start;
			}
	 }


	 button {
		display: flex;
		width: 25rem;
		height: 3.3125rem;
		padding: 1.125rem 6.63769rem;
		justify-content: center;
		align-items: flex-start;
		gap: 0.6125rem;
		flex-shrink: 0;
		border-radius: 0.3125rem;
		border: 1px solid #FF9F1B;
		background: #FF9F1B;
		color: #FFF;
		text-align: center;
		font-family: Arial;
		font-style: normal;
		font-weight: 700;
		line-height: 0.9375rem; 

			svg {
				width: 0.9375rem;
				height: 0.9375rem;
				flex-shrink: 0;
			}
	 }

	
`;
