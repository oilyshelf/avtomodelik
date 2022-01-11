import { combineReducers } from "redux";

//reducers
import ModelRed from "./ModelRed";

const allReducers = combineReducers({
	model: ModelRed,
});

export default allReducers;
