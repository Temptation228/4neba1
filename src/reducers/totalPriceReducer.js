const initialState = 0; 

const totalPriceReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_TOTAL_PRICE':
            return state + action.payload;
        case 'SUBTRACT_FROM_TOTAL_PRICE':
            return state - action.payload;
        default:
            return state;
    }
};

export default totalPriceReducer;