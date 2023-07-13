import { useState } from "react"
const CartItem = (props) =>{
    // console.log("Cart Item",props.el)
            let [qty,setQty]=useState(1)
            
            return(<div className="header head" >
            <h3 >{props.el.name}</h3>
            <h3>{props.el.price}</h3>
            <h3> <input className="cartinput" type="Number"  min="1" placeholder="1" onChange={(e)=>{
            // console.log( "gg", e.target.value)
            let x = e.target.value
            setQty(x)
            }}   /> </h3>
            <h3>{props.el.price*qty}</h3>
            </div>)
          }
export default CartItem ;
