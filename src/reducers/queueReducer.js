const initialState = loadFromLocalStorage() || []; 

const queueReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_QUEUE':
            return [...state, action.payload]; 
        case 'REMOVE_FROM_QUEUE':
            return state.filter(item => item.id !== action.payload); 
        default:
            return state;
    }
};

function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem('queue');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
}

function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('queue', serializedState);
    } catch (err) {
    }
}

export default (state, action) => {
    const newState = queueReducer(state, action);
    saveToLocalStorage(newState);
    return newState;
};