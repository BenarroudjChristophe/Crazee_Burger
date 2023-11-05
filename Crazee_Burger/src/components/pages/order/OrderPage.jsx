import { useParams, Link } from "react-router-dom";
import NavBar from "./reusable-ui/NavBar";

function OrderPage() {

	const { username } = useParams();
    
	return (
		<>
			<NavBar> </NavBar>
			
		</>
	);
}


export default OrderPage;
