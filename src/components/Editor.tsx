import React from "react";
import Graph from "./Graph";
import { Link } from "react-router-dom";
import { ReactFlowProvider } from "react-flow-renderer";
import NodeSitebar from "./NodeSitebar";
export default () => {
	return (
		<div>
			<div className="bg-red-800 flex items-center justify-between p-2">
				<Link
					className="outline outline-gray-900 rounded-md px-4 py-2 lg:text-xl md:text-lg text-md bold font-mono bg-gray-100 hover:bg-red-600 hover:text-white hover:outline-white shadow-xl transition-all duration-100 ease-linear hover:scale-105 hover:shadow-2xl"
					to="/"
				>
					Go back
				</Link>
			</div>
			<ReactFlowProvider>
				<div className="  grid  grid-cols-5 grid-rows-5 h-screen">
					<div className="col-span-4 row-span-5 p-1 ">
						<Graph />
					</div>
					<div className="col-span-1 row-span-1 bg-zinc-200 p-1 flex justify-center">
						<h1 className="text-4xl font-mono text-white">
							{" "}
							Operations
						</h1>
					</div>
					<div className="col-span-1 row-span-3 bg-zinc-300 p-1 flex justify-center">
						<NodeSitebar />
					</div>
					<div className="col-span-1 row-span-2 bg-zinc-500 p-1 flex justify-center">
						<h1 className="text-4xl font-mono text-white"> Chat</h1>
					</div>
				</div>
			</ReactFlowProvider>
		</div>
	);
};
