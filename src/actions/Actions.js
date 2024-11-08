export const setDeviceId = (id) => {
    return { type: 'SET_DEVICE_ID', payload: id };
};

export const addToTotalPrice = (price) => {
    return { type: 'ADD_TO_TOTAL_PRICE', payload: price };
};

export const subtractFromTotalPrice = (price) => {
    return { type: 'SUBTRACT_FROM_TOTAL_PRICE', payload: price };
};