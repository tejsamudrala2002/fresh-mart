import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";

function Veg(){

const vegItems= useSelector(state=>state.products.Veg);

const dispatch=useDispatch();

    // const vegItems=[
    //     { "name": "Potato", "price": 30 },
    //     { "name": "Tomato", "price": 25 },
    //     { "name": "Onion", "price": 40 },
    //     { "name": "Carrot", "price": 50 },
    //     { "name": "Spinach", "price": 20 }
    //   ]
      const findVegItems=vegItems.map((item,index)=>(
        <li key={index}>
          <img src={item.image} alt="" className="veg-img" />
          <br />
            {item.name}
            <br />
            ${item.price} 
            <br /><br />
            <button onClick={()=>dispatch(addToCart(item))}>Add to Cart</button>
        </li>
      ))
    return(
        <>
        <div className="veg"> 
        <h1>veg items</h1>
        <ul>{findVegItems}</ul></div>
        </>
    )
}
export default Veg;