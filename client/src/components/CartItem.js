import { useState } from "react"
import {useCartContext} from "../state/cart_context"
const CartItem = (props) =>{
  const { setDecrease,setIncrement } = useCartContext();

    // console.log("Cart Item",props.el)

            // let [qty,setQty]=useState(1)

            return(<div className="header head" >
            <h3 >{props.el.name}</h3>
            <h3>{props.el.price}</h3>
            {/* <h3> <input className="cartinput" type="Number" value={props.qty}   placeholder="1" onChange={(e)=>{
            let x = e.target.value
            setQty(x)
            }}   /> </h3> */}
            <h3>  <button onClick={()=>{setDecrease(props.el.id)}} >-</button> {props.el.qty } <button  onClick={()=>{setIncrement(props.el.id)}} >+</button>   </h3>
            <h3>{props.el.total}</h3>
            </div>)
          }
export default CartItem ;
