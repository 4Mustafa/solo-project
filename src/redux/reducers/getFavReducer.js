
const getFav = (state = [], action) => {
    if (action.type === 'GET_FAV') {
        return action.payload;
    }
    return state

};

export default getFav;