
const site = (state = [], action) => {
    if (action.type === 'SET_SITE') {
        return action.payload;
    }
    return state

};

export default site;