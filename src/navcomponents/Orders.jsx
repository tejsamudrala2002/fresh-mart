import { useSelector } from "react-redux";

function Orders(){
let getOrders=useSelector((state)=>state.purchase);
let orderItems=getOrders.map((purchasee,index)=>(
    <li key={index}>
        
     <p>Date:{purchasee.date}</p>
     <p>Total Amount:{purchasee.finalprice.toFixed(2)}</p>
     <ul>
      {purchasee.items.map((item,itemindex)=>(
      <li key={itemindex}>
            {item.name}-${item.price}*{item.quantity}
      </li>

      ))}
     </ul>

    </li>
))
    return(
        <>
        <p>{orderItems}</p>
        </>
    )
}
export default Orders;