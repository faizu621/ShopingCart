import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {add,remove} from "../redux/Slices/CartSlice";
import {toast} from "react-hot-toast";



const Product = ({post}) => {
const {cart} =useSelector((state) => state);

  const dispatch=useDispatch();
  console.log(cart);

  const addToCart = () =>{
    dispatch(add(post));
    toast.success("Item added to Cart");
  }
  const removeFromCart = () =>{
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  }
  return (
    <div className="flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
      </div>
      <div>
        <p className=" text-gray-500 text-[10px] w-40  ">{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} className="h-full w-full"/>
      </div>
      <div className="flex justify-between w-[225px] mt-6 ">
        <div className="text-green-500 font-bold ">₹{post.price}</div>
        <div >
        {
          cart.some((p)=> p.id == post.id) ? 
          (<button onClick={removeFromCart}
          className=" text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in">
          Remove Item</button>) : 
          (<button onClick={addToCart} className=" text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in">Add to Cart</button>)
        }
      </div>
      </div>
    </div>
  );
};

export default Product;
