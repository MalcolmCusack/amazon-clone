export const initialState = {
    basket: [],
    user: null,
};


const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {  //mutable updates
        case 'ADD_TO_BASKET':
            //Logic for basket
            return { 
                ...state,
                basket: [...state.basket, action.item] 
                // returning the current state of the basket plus the new state
             };
            break;
        case 'REMOVE_FROM_BASKET':
            //REMOVE item logic
            return { state }
            break;
        default:
            return state; 
    }
}

export default reducer;