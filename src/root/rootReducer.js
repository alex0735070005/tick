import {
  combineReducers,
} from "redux";

import tick from '../Tick/reducers/Tick';

const rootReducer = combineReducers({
  tick,
});

export default rootReducer;
