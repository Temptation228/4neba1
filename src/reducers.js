import { combineReducers } from 'redux'

import queueReducer from './reducers/queueReducer'
import deviceReducer from './reducers/deviceReducer'
import totalPriceReducer from './reducers/totalPriceReducer'

const rootReducer = combineReducers({
    queue: queueReducer,
    device: deviceReducer,
    totalPrice: totalPriceReducer,
});

export default rootReducer;