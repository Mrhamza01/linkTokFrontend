import errorImage from "../images/Error404.png";
import { Link } from "react-router-dom";
function ErrorPage() {
	return (
		<div className="min-h-screen bg-gradient-to-r from-pink-300 to-purple-300 flex items-center justify-center">
			<div className="max-w-4xl mx-auto p-8 rounded-lg shadow-lg bg-white">
				<div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-8 space-y-4 md:space-y-0">
					<div className="w-full md:w-1/2">
						<img
							src={errorImage}
							className="w-full h-auto"
							alt="error-404"
						/>
					</div>
					<div className="w-full md:w-1/2 text-center md:text-left">
						<h1 className="text-4xl font-bold text-gray-800">Oops!</h1>
						<p className="text-xl text-gray-600 mt-4">
							We can't seem to find the page you are looking for.
						</p>
						<p className="text-sm text-gray-400 mt-2">Error code: 404</p>
						<button className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded mt-6">
							<Link to="/">Go back to home</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ErrorPage;
