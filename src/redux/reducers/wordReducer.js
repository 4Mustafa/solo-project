
const word = (state = [], action) => {
    if (action.type === 'SET_WORD') {
        return action.payload;
    }
    return state

};

export default word;