import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";



const Cart = () => {

  const {cart}=useSelector((state)=>state)
  const [totalAmount,setTotalAmount]=useState(0);

  useEffect( ()=>{
    setTotalAmount(cart.reduce((acc,curr)=> acc+curr.price,0))
  },[cart])

  return (
    <div className=" w-11/12 max-w-6xl mx-auto  ">
    {
      cart.length >0 ? 
      (<div className="flex mt-6 flex-col gap-x-10 lg:flex-row md:flex-row sm:flex-row ">
        <div className="w-[65%] flex flex-col gap-y-2">
          {
            cart.map( (item,index) =>{
              return <CartItem key={item.id} item={item} itemIndex={index} />
            } )
          }
        </div>

        <div className="mt-[50px] flex flex-col justify-between max-h-[70vh]  p-4">
          <div>
          <div className="text-xl text-green-700 uppercase font-bold ">Your Cart</div>
          <div className=" uppercase text-3xl font-bold text-green-700">Summary</div>
          <p className=" mt-3">
            <span>Total Items: {cart.length}</span>
          </p>
          </div>
          <div>
          <p className="text">Total Amounts: <span className="font-bold">₹{totalAmount}</span></p>
          <button className="my-4 w-full bg-green-700 text-white py-3 rounded-xl hover:bg-green-900 ">
            CheckOut Now
          </button>
          </div>

        </div>
      </div>) :
      (<div className=" flex flex-col justify-center items-center w-full h-[80vh] gap-y-2">
       <h1 className="text-2xl font-bold uppercase text-slate-800">Cart Is Empty</h1>
       <NavLink to="/">
        <button className=" py-2 px-4 bg-slate-800 text-white rounded-lg">
          Shop Now
        </button>
       </NavLink>
      </div>) 
    }
    </div>
  );
};

export default Cart;
