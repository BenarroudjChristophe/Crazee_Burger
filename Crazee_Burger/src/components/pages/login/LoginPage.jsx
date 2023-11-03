import  styled  from "styled-components";
import LoginForm from "./LoginForm";
import divBeforeImage from "/images/div_before.png";

import Logo from "../../reusable-ui/Logo";


export default function LoginPage() {
	return (

		<LoginPageStyled>
			

			<Logo />
			<LoginForm />
			

		</LoginPageStyled>

		
	);
}

const LoginPageStyled = styled.div`
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		
		
			content: "";
			
			background: url(${divBeforeImage}) rgba(0, 0, 0, 0.7);
			background-size: cover;
			background-position: center;
			background-blend-mode: darken;
			position: absolute;			
			z-index: -1;
			top: 0;
			bottom: 0;
			right: 0;
			left: 0;

		
	
`;
