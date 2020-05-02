
const edit = (state = [], action) => {
    if (action.type === 'HOLD_ITEM') {
        return action.payload;
    }
    return state

};

export default edit;