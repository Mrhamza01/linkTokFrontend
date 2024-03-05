// Navbar.js
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="bg-gray-800 p-4 flex items-center justify-between">
			{/* Logo */}
			<div className="text-white font-bold text-lg">
				<NavLink
					to="/"
					className="text-white">
					Your Logo
				</NavLink>
			</div>

			{/* Menu */}
			<ul className="flex space-x-10 text-xl font-light">
				<li>
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive
								? "text-blue-500 underline font-light text-xl"
								: "text-white"
						}>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/findfriend"
						className={({ isActive }) =>
							isActive
								? "text-blue-500 underline font-light text-xl"
								: "text-white"
						}>
						Find Friend
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/createpost"
						className={({ isActive }) =>
							isActive
								? "text-blue-500 underline font-light text-xl"
								: "text-white"
						}>
						create post
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/foryou"
						className={({ isActive }) =>
							isActive
								? "text-blue-500 underline font-light text-xl"
								: "text-white"
						}>
						ForYou
					</NavLink>
				</li>
			</ul>

			{/* Account Icon */}
			<div className="text-xl font-light">
				<NavLink
					to="/profile"
					className={({ isActive }) =>
						isActive
							? "text-blue-500 underline font-light text-xl"
							: "text-white"
					}>
					account
				</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
