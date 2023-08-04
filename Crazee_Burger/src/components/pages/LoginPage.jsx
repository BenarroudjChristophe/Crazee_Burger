import LoginForm from "../LoginForm";
import { useState } from "react";

export default function LoginPage() {
	const [input, setInput] = useState("");

	return (
		<>
			<LoginForm input={input} setInput={setInput} />
		</>
	);
}
