import { combineReducers } from 'redux';
import queueReducer from './queueReducer';

const rootReducer = combineReducers({
    queue: queueReducer,
});

export default rootReducer;