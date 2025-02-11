import { useDispatch, useSelector} from "react-redux";
import {  increment,decrement,remove, addTopurchase} from "./store";
import { useState } from "react";
import {clearCart} from "./store";


function Cart(){
  let dispatch=useDispatch();
const cartObjects=useSelector(state=>state.cart);
const cartItems=cartObjects.map((item,index)=>(
  <li key={index}>
    <img src={item.image} alt="" style={{ width: "50px", height: "50px" }}/>
    {item.name}-{item.price}  <button onClick={()=>dispatch(decrement(item))}>-</button>{item.quantity}<button onClick={()=>dispatch(increment(item))}>+</button>  Bill={item.price}*{item.quantity}
    {/* <button onClick={()=>dispatch(remove())}>Remove</button> */}
  </li>
))

     
 

      let[discountrate,setDiscountRate]=useState(0);
      let finalPrice=cartObjects.reduce((sum,item)=>sum+item.price*item.quantity,0);
      // let finalPrice = cartObjects.items?.reduce((sum, item) => sum + item.price * item.quantity, 0)||0;

      let discountAmount=finalPrice * discountrate/100;
      let finalAmount=finalPrice-discountAmount;

//Showdiscount and SetShowDiscount
      let [showDiscount,setShowDiscount]=useState(false);
      let [couponCode,setCouponCode]=useState('');
      let[couponDiscount,setCoupondiscount]=useState(0);

      let handlingCode=()=>
        {
        switch (couponCode.toUpperCase())
         {
         case "TEJA10":setCoupondiscount(10); break;
         case "TEJA20":setCoupondiscount(20); break;
         case "TEJA30":setCoupondiscount(30); break;
         default:alert('invalid coupon');
         setCoupondiscount(0);

         }
       };  
      let couponAmountprice=(finalPrice*couponDiscount)/100;
      //sending the cart to orders when we click on purchase now

    let hanlingpurchase=()=>{
            let purchaseDate=new Date().toLocaleDateString();

    let purchaseDetails={
                        items:[...cartObjects],
                        date : purchaseDate,
                        finalprice:finalAmount
    }
    dispatch(addTopurchase(purchaseDetails))
    dispatch(clearCart())

     }
  

    return(
        <>
 {cartObjects.length>0? 
     <div className="cartdiv">
           <h2> welcome to cart</h2> 
             <ol>{cartItems}</ol>
             
               <p>Total price:{finalPrice}</p>
               <p>discount Applied:{discountrate}%</p>
               <p>Discount Amount:{discountAmount}</p>
               <p>net Amount:{finalAmount}</p>
                  <p></p>
               <button onClick={()=>{setDiscountRate(10),setShowDiscount(true)}}>apply 10%</button>
               <button onClick={()=>{setDiscountRate(20),setShowDiscount(true)}}>apply 20%</button>
               <button onClick={()=>{setDiscountRate(30),setShowDiscount(true)}}>apply 30%</button>
                  <br />
                 <p></p> 
              <input type="text" placeholder="enter the coupon" onChange={(e)=>setCouponCode(e.target.value)} />
                <button onClick={()=>handlingCode()}>Apply Coupon</button>
                  <p>coupon applied:{couponDiscount}</p>
                  <p>coupon Discounted:{couponAmountprice}</p>
                  <p>final Amount:{finalAmount}</p>
                   {cartObjects.length > 0 && <button onClick={hanlingpurchase}>Buy Now</button>}

      </div> : <p>your cart is empty</p>
 }
      {/* <div className="cartbutton"> {cartObjects.length > 0 && <button onClick={hanlingpurchase}>Buy Now</button>}</div> */}

   {/* <button onClick={() => hanlingpurchase()} >BuyNow</button> */}
        </>
    )
}
export default Cart;