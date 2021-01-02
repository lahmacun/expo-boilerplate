const increaseCounter = value => {
    return {
        type: "INCREASE_COUNTER",
        payload: value,
    }
}

const decreaseCounter = value => {
    return {
        type: "DECREASE_COUNTER",
        payload: value,
    }
}

export {increaseCounter, decreaseCounter};
