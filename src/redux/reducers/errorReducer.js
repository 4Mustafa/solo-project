
const error = (state = [], action) => {
    if (action.type === 'SET_ERROR') {
        return action.payload;
    }
    return state

};

export default error;