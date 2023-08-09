import { Link } from "react-router-dom";

function ErrorPage() {
	return (
		<>
			<h1>ErrorPage</h1>
			<Link to='/'>
				<button>Retourner vers la page de connexion</button>
			</Link>
		</>
	);
}

export default ErrorPage;
