import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";


function Cartitem({item}) {
    const dispatch = useDispatch();
    function deletefromcart() {
        dispatch(remove(item.id))
    }
    return(
        <div>
            <div>
                <div className="flex w-[600px] gap-6 mb-14 border-b-2 pb-4">
                    <div>
                    <img src={item.image} className="w-[350px]"></img>
                    </div>
                    <div className="flex flex-col ">
                    <h1 className="text-lg font-semibold mb-4">{item.title}</h1>
                    <p className="mb-4">{item.description}</p>
                    <div className="flex flex-row justify-evenly items-center">
                    <p className="text-green-600 font-semibold">${item.price}</p>
                    <div className="bg-red-400 w-[30px] h-[30px] flex items-center justify-center rounded-2xl hover:bg-red-300">
                    <MdDelete className="text-red-800" onClick={deletefromcart}></MdDelete>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Cartitem ; 