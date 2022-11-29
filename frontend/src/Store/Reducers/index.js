import { combineReducers } from "redux";

import main from "./main";
import chat from './chat';

export default combineReducers({
    main,
    chat
});