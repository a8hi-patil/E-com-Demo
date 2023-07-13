
import { useNavigate } from "react-router-dom"; 
import { useEffect, useState } from "react";
import axios from "axios";
const CreateProduct = () =>{

    const [productData, setProductData] = useState({})

    const submitHandler = (e) =>{
        e.preventDefault()
        let name = e.target.name.value
        let price = e.target.price.value
        let company = e.target.company.value
        console.log("op",name,price,company)
        let newProduct={name,
        price,
        company}
        console.log(newProduct)

        axios.post('http://127.0.0.1:5000/api/product', newProduct)
          .then(function (response) {
            console.log(response);
            alert("Product Added Successfully")
          })
          .catch(function (error) {
            console.log(error);
          });

        

    }

    return(<div className="divform">
        
    <form onSubmit={submitHandler} >
      <label for="fname">Name</label>
      <input className="inputform" type="text" id="name" name="name"  placeholder="Name" />
  
      <label for="lname">Price</label>
      <input className="inputform" type="text" id="lname" name="price"  placeholder="Price" value={productData.price} />

      <label for="lname">Company</label>
      <input className="inputform" type="text" id="lname" name="company"  placeholder="Company" value={productData.company} />
  
      
    
      <input className="inputform" type="submit" value="Submit" />
    </form>
  </div>)

}

export default CreateProduct