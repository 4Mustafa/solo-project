const site = (state = [], action) => {
    if (action.type === 'SET_SITE') {
        return { ...state, newSite: action.payload };
    }
    return state

};


export default site;
