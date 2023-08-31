import { useDispatch } from "react-redux";
import {remove} from "../redux/Slices/CartSlice";
import {toast} from 'react-hot-toast'
const CartItem = ({item,itemIndex}) => {
  const dispatch=useDispatch();
  const removeFromCart = ()=>{
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }
  const substr=item.description.substr(0,81) +"..";
  return (
    <div className=" w-full min-h-[360px] flex flex-col md:flex-row lg:flex-row  justify-between p-4 gap-x-3 border border-b-black border-t-0 border-l-0 border-r-0  ">
      <div className="p-2">
        <img src={item.image} className="w-[250px]" />
      </div>
      <div className="mt-4 flex flex-col justify-between h-[70%] ">
      <div className="">
        <h1 className="text-[24px] font-bold">{item.title}</h1>
        <h1 className=" mt-8">{substr}</h1>
      </div>
      <div className="flex mt-12 justify-between ">
        <p className="text-green-700 font-bold ">₹{item.price}</p>
        <button onClick={removeFromCart}
        className=" py-1 px-3 border border-black rounded-md mr-10 hover:bg-slate-800 hover:text-white
        transition-all duration-300 ">Delete</button>
      </div>
      </div>
    </div>
  );
};

export default CartItem;
