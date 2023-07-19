import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from 'axios';


let data = [
  { id:1,
    name: "iphone x",
    company: "apple",
    price: 6000000,
    image:
      "https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
    category: "mobile",
  },
  {id:2,
    name: "samsung s20",
    company: "samsung",
    price: 5000000,

    image:
      "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
    category: "mobile",
  },
  {id:3,
    name: "Dell Series",
    company: "dell",
    price: 600000,

    image:
      "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "The Laptop is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
    category: "laptop",
  },
  { id:4,
    name: "Nokia 420",
    company: "nokia",
    price: 12599,
    image:
      "https://images.pexels.com/photos/4224099/pexels-photo-4224099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
    category: "mobile",
  },
  { id:5,
    name: "Mac Pc",
    company: "apple",
    price: 4000099,
    image:
      "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "The Computer is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
    category: "computer",
  },
  { id:6,
    name: "Macbook Pro",
    company: "apple",
    price: 42999,
    colors: ["#000000", "#CDD0D0"],
    image:
      "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "The Laptop is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
    category: "laptop",
  },
];


const Home = (namew) =>{

  let [apiData , setApiData] = useState([])


    
  useEffect(()=>{
    
    axios.get('http://127.0.0.1:5000/api/product')
  .then(function (response) {
    // handle success
    console.log("ll",response.data);
    setApiData(response.data)
  })
   
  },[])
    return (

      <div class="grid-container">
        
      {apiData.map((el)=>{
          return(

              <div className="grid-item"   ><ProductCard id={el.id} name={el.name}  price={el.price} company={el.company}  /></div>

          )
      })}
  

</div>) }
        


export default Home;