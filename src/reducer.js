export const initialState = {
    basket: [
        {
            id: "123",
            title: "New Product",
            price: 69.69 ,
            rating: 5,
            image: "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg",
        },
    ],
    user: null,
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);
// This goes through all the items in the basket and adds them up starting from 0
// reduces the array to one value

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
            let newBasket = [...state.basket]; //copying the basket state to new basket
            
            // checking to see if product exists
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >=0) {
                newBasket.splice(index, 1); //remove from basket
            } else {
                console.warr(`Cant remove product (id: ${action.id}) as its not in the basket`);
            }

            return { ...state, 
                basket: newBasket };
        default:
            return state; 
    }
}

export default reducer;