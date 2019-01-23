import {
  combineReducers,
} from "redux";

import tick from './Tick';

const rootReducer = combineReducers({
  tick,
});

export default rootReducer;
