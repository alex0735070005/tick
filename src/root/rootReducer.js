import {
  combineReducers,
} from "redux";

import tick from '../Tick/redusers/Tick';

const rootReducer = combineReducers({
  tick,
});

export default rootReducer;
