import { combineReducers } from "redux";

import user from "./user.reducer";
import chats from "./chat_reducer";

const rootReducer = combineReducers({
    user,
    chats
});

export default rootReducer;
