const initState = {
    count: 0,
};

export const counterReducer = (state = initState, action: any) => {
    switch (action.type) {
        case "counterUp":
            return {
                ...state,
                count: state.count + 1,
            }
        case "counterDown":
            return {
                ...state,
                count: state.count - 1,
            }
        case "counterReset":
            return {
                ...state,
                count: 0,
            }
    }
    return state;
}