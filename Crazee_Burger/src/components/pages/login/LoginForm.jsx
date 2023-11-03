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
					
		</LoginFormStyled>
	);
}

	const LoginFormStyled = styled.form`

			width: 29rem;
			height: 27.39456rem;
			flex-shrink: 0;
			border-radius: 5px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			margin-left: auto;
			margin-right: auto;
			margin-top: -100px;
			
			
	h1{
			color: #FFF;
			text-align: center;
			font-family: Amatic SC;
			font-size: 3rem;
			font-style: normal;
			font-weight: 700;
			line-height: 3.8125rem; /* 127.083% */}
		

	span{
			display: block;
			width: 25rem;
			height: 0.1875rem;
			flex-shrink: 0;
			border: 1px solid #F56A2C;
			background: #F56A2C;
			margin-left: auto;
			margin-right: auto;
		}
	

	h2
			{color: #FFF;
			text-align: center;
			font-family: Amatic SC;
			font-size: 2.25rem;
			font-style: normal;
			font-weight: 700;
			line-height: 2.875rem; /* 127.778% */
			margin-top: 1rem
	}
		
	div{
			display: inline-flex;
			padding: 1.125rem 1.5rem;
			align-items: center;
			gap: 0.79981rem;
			border-radius: 0.3125rem;
			background: #FFF;
			width: 22rem;
			margin-left: auto;
			margin-right: auto;}
		

	svg{
			width: 0.9375rem;
			height: 0.9375rem;
			flex-shrink: 0;
			color: #747b91;}
		 
input
			{color: #D3D3D3;
			font-family: Arial;
			font-size: 0.9375rem;
			font-style: normal;
			font-weight: 400;
			line-height: 1.0625rem;
			border: none /* 113.333% */}
	

button{
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
			margin-left: auto;
			margin-right: auto;
			color: #FFF;
			margin-top: 1.12rem;
			text-align: center;
			font-weight: 700;


			& > svg {
				width: 0.9375rem;
			height: 0.9375rem;
			flex-shrink: 0;
			/* color: #fff; */
			}

				&:hover{
					cursor:pointer;				
					/* filter: drop-shadow(0px 2px 3.5999999046325684px rgba(0, 0, 0, 0.65)); */
					color: #FF9F1B;
					background: #FFF;
			
				}
	}

	/* const StyledSvg2 = styled.svg
			width: 0.9375rem;
			height: 0.9375rem;
			flex-shrink: 0;
			color: #fff;

				&:hover{
					color: #FF9F1B;

				} */
	`
				
			
			
		
		
	





 

