const topic = (state = [], action) => {
    if (action.type === 'SET_TOPIC') {
        return [{ ...state, newTopic: action.payload }];
    }
    return state

};

export default topic;
