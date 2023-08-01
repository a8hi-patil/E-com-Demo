const cartReducer = (state, action) => {
    if (action.type === "CART_TOTAL_PRICE") {
        let total_price = state.cart.reduce((initialVal, curElem) => {
            let { total } = curElem;

            initialVal = initialVal + total;
            // 25000 + 0 = 25000
            // 10199 + 25000 = 121

            return initialVal;
        }, 0);

        return {
            ...state,
            total_price,
        };
    }

    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: [],
        };
    }

    if (action.type === "SET_DECREMENT") {
        // console.log(action.payload)
        // console.log(state.cart)
        for(let i = 0 ; i < state.cart.length ; i++){
            
           if(state.cart[i].id === action.payload){
            if(state.cart[i].qty === 1){
                alert("Minimun 1 qty requires")
                break
            }
            state.cart[i].qty = state.cart[i].qty - 1
            state.cart[i].total = state.cart[i].qty * state.cart[i].price 
            break
           }
        }
        // console.log(state.cart)

        return {state,cart:[...state.cart,]};
    }

    if (action.type === "SET_INCREMENT") {
        console.log(state.cart)
        for(let i = 0 ; i < state.cart.length ; i++){
            
            if(state.cart[i].id === action.payload){
            
            state.cart[i].qty = state.cart[i].qty + 1
            state.cart[i].total = state.cart[i].qty * state.cart[i].price 
             break
            }
         }
         console.log(state.cart)
 
         return {state,cart:[...state.cart,]};
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

                id:id,name:name,price:price,company:company,qty:1,total:price
            };

        // console.log("Reducer",name,price,company)
        // console.log(state)
            return {
                ...state,
                cart: [...state.cart, cartProduct]
            };
        }
        


    return state;
};




}
export default cartReducer;