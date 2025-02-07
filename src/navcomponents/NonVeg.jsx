
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";

function NonVeg(){

const nonvegItems= useSelector(state=>state.products.Nonveg);

const dispatch=useDispatch();


// const nonvegItems=[{name:"mutton",price:900},
//                    {name:"chicken",price:290},
//                    {name:"prawns",price:400},
//                    {name:"fish",price:300},
//                    {name:"eggs",price:200}]

const findNonVeg=nonvegItems.map((item,index)=>( 
        <li key={index}>

                <img src={item.image} alt="" height="100px" className="nonveg-image"/>
                <br />
                {item.name} 
                <br /><br />
                ${item.price} <br />

                <button onClick={()=>dispatch(addToCart(item))}> Add to cart</button>
        </li>
))
        return(
        <>
        <div className="nonveg">
        <h1>Non-Veg</h1>
       <ol>{findNonVeg}</ol>
       </div>
        </>
    )
    }
    export default NonVeg;