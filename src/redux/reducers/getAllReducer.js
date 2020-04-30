
const getItem = (state = [], action) => {
    if (action.type === 'GET_ITEM') {
        return action.payload;
    }
    return state

};

export default getItem;