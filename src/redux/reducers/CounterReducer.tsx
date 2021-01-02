const INITIAL_STATE = {
    count: 0,
};

const CounterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "INCREASE_COUNTER":
            return {...state, ...{count: state.count + 1}};
        case "DECREASE_COUNTER":
            if (state.count > 0) {
                return {...state, ...{count: state.count - 1}};
            }

            return state;
        default:
            return state;
    }
}

export default CounterReducer;
