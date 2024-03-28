import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Spinner from "./components/Spinner"

function App() {
  const [loading , setloading] = useState(false)
const [productdata , setproductdata] = useState([]);
const [cartdata , setcartdata] = useState([]);
console.log(productdata)
async function fetchproductdata() {
  setloading(true);
  let url = "https://fakestoreapi.com/products" ; 
  try{
    const response = await fetch(url)
    const result = await response.json() ; 
    setproductdata(result)
  }
  catch(error) {
    console.log(error)
  }
  setloading(false)
}


useEffect(() => {
  fetchproductdata() ;
} , [])

  return(
    <div>
      <Navigation></Navigation>


      <Routes>
            <Route path="/" element={loading ? (<Spinner></Spinner>) : (<Home productdata={productdata}></Home>)}></Route>
            <Route path="/cart" element={<Cart cartdata={cartdata}></Cart>}></Route>
      </Routes>
    </div>
  )
}


export default App ; 
