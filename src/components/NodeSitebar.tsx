import React from "react";

export default () => {
	const onDragStart = (event, nodeType) => {
		event.dataTransfer.setData("application/reactflow", nodeType);
		event.dataTransfer.effectAllowed = "move";
	};

	return (
		<div className="grid grid-cols-1 gap-1">
			<div className="description flex justify-items-center text-xl font-mono bold">
				You can drag these nodes to the pane on the right.
			</div>
			<div
				className="p-2 flex justify-center items-center outline font-mono text-xl bold shadow-md m-2 bg-white rounded-md outline-blue-600"
				onDragStart={(event) => onDragStart(event, "input")}
				draggable
			>
				Input Node
			</div>
			<div
				className="p-2 flex justify-center items-center outline font-mono text-xl bold shadow-md m-2 bg-white rounded-md "
				onDragStart={(event) => onDragStart(event, "default")}
				draggable
			>
				Default Node
			</div>
			<div
				className="p-2 flex justify-center items-center outline font-mono text-xl bold shadow-md m-2 bg-white rounded-md outline-pink-500"
				onDragStart={(event) => onDragStart(event, "output")}
				draggable
			>
				Output Node
			</div>
		</div>
	);
};
