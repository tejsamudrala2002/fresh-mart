import { configureStore, createSlice } from "@reduxjs/toolkit";
// import Veg from "./veg";
// import Nonveg from "./NonVeg";
// import Cart from "./Cart";

const productSlice=createSlice({
    name:'products',
    initialState:{
        Veg:[{name:'tomato',price:200.5, image: "tomato.jpg" },
            {name:'onion',price:40.00,image:"onion.jpg"},
            {name:'mirchi',price:60.00,image:"mirchi.jpg"},
            { name: "Potato", price: 30,image:"potato.jpg" },
            { name: "Carrot", price: 50 ,image:"carrot.jpg"},
            { name: "Spinach", price: 20 ,image:"spanish.jpg"}
        
        
        
        ],

        Nonveg:[{name:'chicken',price:40.6 ,image:"chicken.jpg"},
                {name:'mutton',price:900.00,image:"mutton.png"},
                {name:'fish',price:300.00,image:"fish.jpg"},
                {name:'eggs',price:300.00,image:"eggs.jpg"},
             {name:'prawns',price:300.00,image:"prawns.jpg"}]
    },
    reducers:{}
})
const cartSlice=createSlice(
    {
        name:"cart",
        initialState:[],
        reducers:{
            addToCart:(state,action)=>{
            let item=state.find(item=>item.name === action.payload.name)
            if(item){
                  item.quantity+=1;
            }
            else{
                state.push({...action.payload,quantity:1});
            }
        },
        increment: (state,action)=>{
            let incrementItem=state.find(item=>item.name===action.payload.name);
            incrementItem.quantity+=1;
          
        },
        decrement: (state,action)=>{
            let decrementItem=state.find(item=>item.name===action.payload.name);
            if(decrementItem && decrementItem.quantity>1){
                decrementItem.quantity-=1;
            }
            else{
                return decrementItem=state.filter(item=>item.name !== action.payload.name);
            }
          
        },
        remove:(state,action)=>{
            return state.filter(item=>item.name !== action.payload.name)
              },
        clearCart:()=>[]

        }
        
    }
)
let purchaseSlice=createSlice({
    name:"purchase",
    initialState:[],
    reducers:{
        addTopurchase:(state,action)=>{
            state.push(action.payload);
        }       
    }
})
let auth=createSlice(
    {
        name:"authenticated",
        initialState:{
            isAuthenticated:localStorage.getItem('username')?true:false,
            user:localStorage.getItem('username')||" "
        },
        reducers:{
            login:(state,action)=>{
                state.isAuthenticated=true;
                state.user=action.payload
                localStorage.setItem("username",action.payload);
            },
            logout:(state)=>{
                state.isAuthenticated=false;
                state.user=" ";
                localStorage.removeItem("username");
            }
        }
    }
)

const store=configureStore(
    {
        reducer:{products:productSlice.reducer,cart:cartSlice.reducer,purchase:purchaseSlice.reducer,authenticated:auth.reducer}
    }
)
export const {addToCart,increment,decrement,remove,clearCart}=cartSlice.actions;
export const{addTopurchase} = purchaseSlice.actions;
export const{login,logout}=auth.actions;
export default store;
