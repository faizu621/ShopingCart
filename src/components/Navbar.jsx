import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Image from "../images.png"

const Navbar = () => {
  const {cart} =useSelector((state)=>state);
  let count=cart.length;
  return (
    <div className=" bg-slate-800 h-20 flex items-center " >
      <div className="w-11/12 max-w-[1100px] mx-auto flex justify-between  ">
         <NavLink to="/ShopingCart/">
          <img src={Image} className="h-[56px] ml-4 " />
         </NavLink>
        <div className=" text-white flex gap-x-2 items-center ">
          <NavLink to="/ShopingCart/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart" className="text-[25px]">
             <div className="relative">
              {
                count>0 && 
                <span className="absolute w-5 h-5 rounded-full bg-green-700 text-white
                flex justify-center items-center text-[14px] font-bold -top-2 -right-1 animate-bounce transition-all duration-300">{count}</span>
              }
              <FaShoppingCart/>
             </div>
          </NavLink>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
