const initialState = {
    deviceId: null, 
};

const deviceReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DEVICE_ID':
            return { ...state, deviceId: action.payload };
        default:
            return state;
    }
};

export default deviceReducer;