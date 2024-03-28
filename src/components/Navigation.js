import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Navigation() {
    return(
        <div className="bg-black h-14 flex justify-evenly items-center">
            <NavLink to="/">
                <img src="https://codehelp-shopping-cart.netlify.app/logo.png" width={150}></img>
            </NavLink>
            <span className="text-white flex gap-[20px]">
            <NavLink to="/">
            <button className="hover:text-green-400">Home</button>
            </NavLink>
            <NavLink to="/cart">
            <button><FaShoppingCart className="hover:text-green-400"></FaShoppingCart></button>
            </NavLink>
            </span>
        </div>
    )
}

export default Navigation ; 