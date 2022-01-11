import React from "react";
import { Link } from "react-router-dom";

export default () => {
	return (
		<div className="flex justify-center items-center w-full h-screen">
			<Link
				to="/edit"
				className="outline outline-gray-900 rounded-md px-6 py-4 lg:text-8xl md:text-6xl text-4xl bold font-mono bg-gray-100 hover:bg-red-600 hover:text-white hover:outline-white shadow-xl transition-all duration-100 ease-linear hover:scale-105 hover:shadow-2xl"
			>
				Start
			</Link>
		</div>
	);
};
