const INITIAL_STATE = {
    counter: 0
}
const counterReducer= (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'PLUS_COUNTER':
            return { counter: ++state.counter }
           
        case 'MINUS_COUNTER':
            return { counter: --state.counter }
                

        default:
            return{...state};
    }
}

export {counterReducer}