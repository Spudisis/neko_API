import { Route, Routes } from "react-router";
import { Home } from "./home";

export const Routing = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
		</Routes>
	);
};
