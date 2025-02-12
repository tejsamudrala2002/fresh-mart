import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./navcomponents/Home";
import NonVeg from "./navcomponents/NonVeg";
import "./App.css";




import Veg from "./navcomponents/Veg";
import Cart from "./navcomponents/Cart";
import About from "./navcomponents/About";
import Dairyproducts from "./navcomponents/Dairyproducts"; 
import Orders from "./navcomponents/Orders";
import { useDispatch, useSelector } from "react-redux";
import Login from "./navcomponents/Login";

import { logout } from "./navcomponents/store";
import Search from "./navcomponents/Search";

function App(){
   let carts = useSelector(state => state.cart );
const total = carts.reduce((sum, item) => sum + item.quantity,0);
  let dispath=useDispatch();
  let isAuthenticated = useSelector(state => state.authenticated.isAuthenticated)
  let users = useSelector( state => state.authenticated.user)

//



return(
    <> 
    <div className="main"> <BrowserRouter>
    <div className="header">
 <h2 className="fresh">Fresh-Mart</h2>
 
 {/* <div>
 <Search/>
 </div> */}
 
    </div>
   
    <div className="navbar">
     <nav className="nav">
         <Link to='/home'><i class="fa-thin fa-house"></i>Home</Link>
         <Link to='/nonveg'>🍗Nonveg</Link>
         <Link to='/veg'>🥦Veg</Link>
         <Link to='/dairy'>Diary Products</Link>
         <Link to='/about'>About US</Link>
         <Link to='/orders' className="orders">Orders</Link>
        <Link to='/cart'>&#128722;cart<span>{total}</span></Link> 

      {isAuthenticated ?( 
         <>
         <span className="welcome">welcome {users}!</span>
         <button onClick={()=>dispath(logout())}>Logout</button>
         </>
      ):         <Link to='/login'>Signin</Link>
}

   </nav>
</div>
     <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/nonveg" element={<NonVeg/>} />
        <Route path="/veg" element={<Veg/>}/>
        <Route path="/dairy" element={<Dairyproducts/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>
 </BrowserRouter>
</div>

    </>
   
)
}
export default App;