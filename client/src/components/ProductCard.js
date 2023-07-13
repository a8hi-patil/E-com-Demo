
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../state/cart_context"

const ProductCard = ({id,name,price,company}) =>{
  console.log("id",id,name,price,company)
    const { addToCart } = useCartContext()

    let img ="https://careertalk.edugrown.in/wp-content/uploads/2022/12/604f54f564fec0437c7c6997_What-is-product-design.png"

    const navigate = useNavigate();
    const clickHandler = (namew) =>{

    navigate(`/edit/${namew}`)
    console.log("id",namew)

    }
    return(
    
    <div class="card">
    <div class="container">
      <img className="product"  src={img}  />
      <h4><b>{name}</b></h4>
      <h5><b>Rs.{price}/-</b></h5>
      <h5><b>{company}</b></h5>
      <button onClick={()=>{addToCart(id,name,price,company)}} > Add To Card</button>
      <button onClick={()=>{clickHandler(id)}}  >Edit</button> 
    </div>
  </div>
  )
}

export default ProductCard;