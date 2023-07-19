const cartReducer = (state, action) => {

    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: [],
        };
    }
    

    if (action.type === "ADD_TO_CART") {
        let { id,name,price,company } = action.payload;
        
        // tackle the existing product

        let existingProduct = state.cart.find(
            (curItem) => curItem.id == id 
        );

        if (existingProduct) {
            let updatedProduct = state.cart.map((curElem) => {
                if (curElem.id == id ) {
                    return {
                        ...curElem
                    };
                } else {
                    return curElem;
                }
            });
            return {
                ...state,
                cart: updatedProduct,
            };
        } else {
            let cartProduct = {

                id:id,name:name,price:price,company:company
            };

        console.log("Reducer",name,price,company)
        console.log(state)
            return {
                ...state,
                cart: [...state.cart, cartProduct]
            };
        }
        


    return state;
};




}
export default cartReducer;