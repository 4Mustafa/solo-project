const getItem = (state = [], action) => {
    if (action.type === 'GET_ITEM') {
        return { ...state, newSite: action.payload };
    }
    return state

};


export default getItem;
