function reducer(state, action){
    switch(action.type){
        case "City":
            state.city = action.payload.city;
            return{...state};
        default:
            return state;
    }
}

export {reducer}