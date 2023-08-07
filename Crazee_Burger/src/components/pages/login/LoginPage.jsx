import { styled } from "styled-components";
import LoginForm from "./LoginForm";
import divBeforeImage from "../../../assets/div_before.png";
import CrazeeBurger from "../CrazeeBurger";


export default function LoginPage() {
	return (
	
		<LoginPageStyle>
			<CrazeeBurger />
			<LoginForm />
		</LoginPageStyle>
		
	);
}

const LoginPageStyle = styled.div`
background: url(${divBeforeImage});
position: absolute;
width: 94.5rem;
height: 61.375rem;
/* opacity: 0.5; */
/* background: #000; */
mix-blend-mode: darken;
/* box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); */





`;

