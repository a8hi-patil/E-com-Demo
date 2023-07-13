import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
const EditProduct = () =>{
    const [productData, setProductData] = useState({})
    

   

    const navigate = useNavigate();
    const { id } = useParams();
    const submitHandler = (e) =>{
        e.preventDefault()
        let name = e.target.name.value
        let price = e.target.price.value
        let company = e.target.company.value
        console.log("op",name,price,company)

        let newProduct ={name,price,company}

        axios.put(`http://127.0.0.1:5000/api/product/${id}`, newProduct)
          .then(function (response) {
            console.log(response);
            alert("Product Updated Successfully")
          })
          .catch(function (error) {
            console.log(error);
          });
        navigate(`/`)

    }
    useEffect(()=>{

      axios.get(`http://127.0.0.1:5000/api/product/${id}`)
      .then(function (response) {
        // handle success
        console.log("ll",response.data);
        setProductData(response.data)
      })
      
      
  },[])

  const deleteProduct = () =>{
    axios.delete(`http://127.0.0.1:5000/api/product/${id}`)
      .then(function (response) {
        // handle success
        alert("Product Deleted Successfully")
        navigate(`/`)
        
      })
  }

    return(<div className="divform">
        
        <form onSubmit={submitHandler} >
          <label for="fname">Name</label>
          <input className="inputform" type="text" id="name" name="name" onChange={(e)=>{
            // console.log(e.target.value)
            setProductData({name:e.target.value})
            }}  value={productData.name} />
      
          <label for="lname">Price</label>
          <input className="inputform" type="text" id="lname" name="price" onChange={(e)=>{
            // console.log(e.target.value)
            setProductData({price:e.target.value})
            }} placeholder="Price" value={productData.price} />

          <label for="lname">Company</label>
          <input className="inputform" type="text" id="lname" name="company" onChange={(e)=>{
            // console.log(e.target.value)
            setProductData({company:e.target.value})
            }} placeholder="Company" value={productData.company} />
      
          
        
          <input className="inputform" type="submit" value="Submit" />
          
         
        </form>
        <button  onClick={deleteProduct} >Delete Product</button>
      </div>)
}

export default EditProduct