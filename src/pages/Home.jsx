import { useDispatch, useSelector } from "react-redux";
import { add , remove } from "../redux/Slices/CartSlice";

function Home({productdata}) {
  const dispatch = useDispatch();
  const {cartslice} = useSelector((state) => state) ; 


  return(
    <div className=" max-w-[1300px] mx-auto p-[20px] flex flex-wrap">
      {
        productdata.map((product) => {
          const title = `${product.title.substring(0,15)}...`; 
          const description = `${product.description.substring(0,50)}...`;
          return(
            <div key={product.id} className="transition ease-in-out delay-150 duration-700  border-2 shadow-xl border-slate-300 m-2 p-4 w-[280px] flex flex-col items-center rounded-lg hover:scale-110 hover:shadow-indigo-500/40">
              <h1 className="mb-[20px]">{title}</h1>
              <p className="text-xs text-slate-400">{description}</p>
              <img src={product.image} width={120}></img>
              <div className=" w-full flex justify-between mt-[50px]">
              <p className="text-green-600 font-bold">${product.price}</p>
              {
                cartslice.some((cart) => cart.id == product.id) ? 
                (<button className="uppercase text-[13px] font-medium border-2 p-1 rounded-2xl border-gray-950 hover:bg-slate-700 hover:border-slate-700 hover:text-white" onClick={() => dispatch(remove(product.id))}>Remove item</button>) : 
                 (<button className="uppercase text-[13px] font-medium border-2 p-1 rounded-2xl border-gray-950 hover:bg-slate-700 hover:border-slate-700 hover:text-white" onClick={() => dispatch(add(product))}>Add to cart</button>)
              }
              </div>
            </div>
          )
        })
      }
    </div>
  )
}


export default Home ; 