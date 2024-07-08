// import Image from "next/image";
"use client"
import Home from "./Pages/Home/page.jsx";
import { CartProvider } from 'react-use-cart';
import Cart from "./Cart/page.jsx"
export default function App() {
  return (
    <CartProvider>
      <Home/>
      {/* <Cart/> */}
    </CartProvider>
    
  );
}
