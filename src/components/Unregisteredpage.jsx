import { Link } from "react-router-dom";

const Unregisteredpage = () => {
	return (
		<div className="h-screen w-screen bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
			<div className="bg-white p-8 rounded-lg shadow-lg">
				<h1 className="text-4xl font-bold text-gray-800">Welcome to Linktok</h1>
				<p className="text-xl text-gray-600 mt-4">
					Please login or register to continue.
				</p>
				<div className="flex space-x-4 mt-6">
					<Link
						to="/login"
						className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded">
						Login
					</Link>
					<Link
						to="/signup"
						className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded">
						Signup
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Unregisteredpage;
