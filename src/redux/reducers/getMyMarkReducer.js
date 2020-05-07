
const getMine = (state = [], action) => {
    if (action.type === 'GET_MINE') {
        return action.payload;
    }
    return state

};

export default getMine; 