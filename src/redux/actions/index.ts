export const removeElement = (par) => {
	return { type: "removeElement", param: par };
};
export const onConnect = (par) => {
	return { type: "onConnect", param: par };
};

export const addNode = (par) => ({ type: "addNode", param: par });
export const updateNode = (par) => ({ type: "updateNodePos", param: par });
