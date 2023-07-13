
import { useState } from "react";
import {useCartContext} from "../state/cart_context"
import CartItem from "./CartItem";
const Cart = () =>    {
        const { cart, clearCart, total_price, shipping_fee } = useCartContext();
        // console.log("🚀 ~ file: Cart.js ~ line 6 ~ Cart ~ cart", cart);
        
        if (cart.length === 0) {
          return (
            
              <h3>No Cart in Item </h3>
            
          );
        }
      
        return (
          
            <>
            <div className="container" >
          <div className="header head" >
          <h3>Item Name</h3>
          <h3>Price</h3>
          <h3>Quantity</h3>
          <h3>Total</h3>
          </div> 

          {cart.map((el)=>{
              return( <CartItem el={el} />)
            })
          }
      <button onClick={()=>{alert("Order Placed Succcedfully")}} >Place Order</button>
      </div>
            </>
          
        );
      };


export default Cart;