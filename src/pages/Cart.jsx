import { NavLink } from "react-router-dom";
import Cartitem from "../components/Cartitem";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Cart() {
  const {cartslice} = useSelector((state) => state);
  // const {totalamount , settotalamount} = useState(0);
  const [totalamount , settotalamount] = useState(0);

  useEffect(() => {
    settotalamount(cartslice.reduce( (acc , curr) => acc + curr.price , 0 )) ; 
  }, [cartslice])


  return(
    <div>
      {
        cartslice.length > 0 ? 
        (<div className="flex justify-center mt-[80px] gap-10">
          <div>
          {
            cartslice.map((item) => {
              return <Cartitem item={item}></Cartitem>
            })
          }
          </div>
          <div className="flex flex-col justify-between flex-wrap pb-24">
            <div>
            <h2 className="uppercase text-green-700 font-semibold text-xl">your cart</h2>
            <h1 className="uppercase text-5xl text-green-700 font-semibold mb-6">summary</h1>
            <p className="text-lg text-slate-900 font-semibold">Total Items : {cartslice.length}</p>
            </div>
            <div>
            <p className="text-lg text-slate-900 font-semibold pb-8">Total Amount : ${totalamount}</p>
            <button className="bg-green-700 text-white w-full py-4 text-lg font-semibold rounded-lg hover:bg-green-600">Checkout Now</button>
            </div>
          </div>
        </div>) : 
        (<div className="h-[500px] flex justify-center items-center">
          <div className="flex flex-col gap-3 items-center">
          <h2 className="text-xl font-semibold ">Your cart is empty!</h2>
          <NavLink to="/">
          <button className="bg-green-500 text-white px-4 py-2 rounded-md uppercase font-semibold hover:bg-white hover:border-2 hover:text-green-500 hover:border-green-500">Shop Now</button>
          </NavLink>
          </div>
        </div>)
      }
    </div>
  )
}


export default Cart ; 
