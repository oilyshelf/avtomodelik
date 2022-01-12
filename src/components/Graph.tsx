import React, { useState, useRef } from "react";

import ReactFlow, {
	removeElements,
	addEdge,
	MiniMap,
	Controls,
	Background,
} from "react-flow-renderer";

import { useAppSelector, useAppDispatch } from "../redux/utils/hooks";
import { addNode, onConnect, removeElement } from "../redux/actions";

let id = 0;
const getId = () => `dndnode_${id++}`;

const OverviewFlow = () => {
	const els = useAppSelector((state) => state.model);
	const dispatch = useAppDispatch();

	const reactFlowWrapper = useRef(null);
	const [reactFlowInstance, setReactFlowInstance] = useState(null);

	const onLoad = (_reactFlowInstance) => {
		setReactFlowInstance(_reactFlowInstance);
		console.log("flow loaded:", _reactFlowInstance);
		_reactFlowInstance.fitView();
	};

	const onElementsRemove = (elementsToRemove) =>
		dispatch(removeElement(elementsToRemove));
	const onConnectE = (params) => dispatch(onConnect(params));

	//DnD
	const onDragOver = (event) => {
		event.preventDefault();
		event.dataTransfer.dropEffect = "move";
	};

	const onDrop = (event) => {
		event.preventDefault();

		const reactFlowBounds =
			reactFlowWrapper.current.getBoundingClientRect();
		const type = event.dataTransfer.getData("application/reactflow");
		const position = reactFlowInstance.project({
			x: event.clientX - reactFlowBounds.left,
			y: event.clientY - reactFlowBounds.top,
		});
		const newNode = {
			id: getId(),
			type,
			position,
			data: { label: `${type} node` },
		};
		console.log(newNode);
		dispatch(addNode(newNode));
		// setElements((es) => es.concat(newNode));
	};

	return (
		<div className="reactflow-wrapper w-full h-full" ref={reactFlowWrapper}>
			<ReactFlow
				elements={els}
				onElementsRemove={onElementsRemove}
				onConnect={onConnectE}
				onLoad={onLoad}
				onDrop={onDrop}
				onDragOver={onDragOver}
				snapToGrid={true}
				snapGrid={[15, 15]}
			>
				<MiniMap
					nodeStrokeColor={(n: any) => {
						if (n.style?.background) return n.style.background;
						if (n.type === "input") return "#0041d0";
						if (n.type === "output") return "#ff0072";
						if (n.type === "default") return "#1a192b";

						return "#eee";
					}}
					nodeColor={(n: any) => {
						if (n.style?.background) return n.style.background;

						return "#fff";
					}}
					nodeBorderRadius={2}
				/>
				<Controls />
				<Background color="#aaa" gap={16} />
			</ReactFlow>
		</div>
	);
};

export default OverviewFlow;
