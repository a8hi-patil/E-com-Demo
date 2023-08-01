
import { useState } from "react";
import {useCartContext} from "../state/cart_context"
import CartItem from "./CartItem";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { clearCart } from "../state/cart_context"
const Cart = () =>    {
  // const { clearCart } = useCartContext()
  const navigate = useNavigate();
        const { cart, clearCart, total_price, shipping_fee,setDecrease,setIncrement } = useCartContext();
        
        
        if (cart.length === 0) {
          return (
            
              <h3>No Item in Cart </h3>
            
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
      <button onClick={()=>{
        let order_ids = []
         cart.filter((el)=>{
          if(el.id){
            order_ids.push(el.id)
          }
        })
        order_ids = order_ids.join(",")
        console.log("Cart ids",order_ids)
        // console.log("🚀 ~ file: Cart.js ~ line 6 ~ Cart ~ cart", cart);
        const newProduct={order_ids}

        axios.post('http://172.22.115.8:5000/api/product/order', cart)
        .then(function (response) {
          console.log(response);
          alert("Order Placed Succcedfully")
          clearCart()
          
          
          navigate('/')
          
          
          
        })
        .catch(function (error) {
          clearCart()
          console.log(error);
        });

        }    
    } >Place Order</button>

    <h2>Total Amount {total_price}</h2>
      </div>
            </>
          
        );
      };


export default Cart;