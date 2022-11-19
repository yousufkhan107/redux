const plusCounter = ()=>{
    return (dispatch)=>{
        dispatch({
            type: 'PLUS_COUNTER',
            // payload: value
        })
    }
}
const minusCounter = ()=>{
    return (dispatch)=>{
        dispatch({
            type: 'MINUS_COUNTER',
            // payload: value
        })
    }
}

export{plusCounter,minusCounter}