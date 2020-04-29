const error = (state = [], action) => {
    if (action.type === 'SET_ERROR') {
        return { ...state, newError: action.payload };
    }
    return state

};


export default error;
