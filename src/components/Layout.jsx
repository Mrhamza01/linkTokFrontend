import Navbar from "./Navbar";
import Fotter from "./Fotter";
import { Outlet } from "react-router-dom";
import { store } from "../components/redux/store";
import { Provider } from "react-redux";
const layout = () => {
	return (
		<>
			<Navbar />
			<Provider store={store}>
				<Outlet />
			</Provider>

			<Fotter />
		</>
	);
};

export default layout;
