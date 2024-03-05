import "./index.css";
import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ChangePassword from "./components/ChangePassword";
import Profile from "./components/Profile";
import Layout from "./components/layout";
import Signup from "./components/Signup.jsx";
import CreatePost from "./components/CreatePost";
import FindFriend from "./components/FindFriend";
import Foryou from "./components/Foryou";
import Home from "./components/Home";
import Login from "./components/Login";
import Errorpage from "./components/Errorpage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <Errorpage />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "/Login",
				element: <Login />,
			},
			{
				path: "/signup",
				element: <Signup />,
			},
			{
				path: "/reset",
				element: <ChangePassword />,
			},
			{
				path: "/profile",
				element: <Profile />,
			},
			{
				path: "/createpost",
				element: <CreatePost />,
			},
			{
				path: "/findfriend",
				element: <FindFriend />,
			},
			{
				path: "/Foryou",
				element: <Foryou />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
