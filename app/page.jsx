// import Image from "next/image";
"use client"
import Home from "./Pages/Home/page.jsx";
import { CartProvider } from 'react-use-cart';

export default function App() {
  return (
    <CartProvider>
      <Home/>
    </CartProvider>
    
  );
}
