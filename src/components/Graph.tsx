import React, { useState } from "react";

import ReactFlow, {
	removeElements,
	addEdge,
	MiniMap,
	Controls,
	Background,
} from "react-flow-renderer";

import { useAppSelector, useAppDispatch } from "../redux/utils/hooks";
import { onConnect, removeElement } from "../redux/actions";

const onLoad = (reactFlowInstance) => {
	console.log("flow loaded:", reactFlowInstance);
	reactFlowInstance.fitView();
};

const OverviewFlow = () => {
	const els = useAppSelector((state) => state.model);
	const dispatch = useAppDispatch();

	const onElementsRemove = (elementsToRemove) =>
		dispatch(removeElement(elementsToRemove));
	const onConnectE = (params) => dispatch(onConnect(params));

	return (
		<ReactFlow
			elements={els}
			onElementsRemove={onElementsRemove}
			onConnect={onConnectE}
			onLoad={onLoad}
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
	);
};

export default OverviewFlow;
