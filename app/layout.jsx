"use client"
import "./globals.css";
// import {Header} from "./Components/Header/Header.jsx";
import {Header} from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import {CartProvider} from "react-use-cart";


export default function RootLayout({children}) {
	return (
		<html lang='en'>
			{/* <Header/> */}
			<CartProvider>
			 <body className>
				{children}
			 </body>
			</CartProvider>
			
		</html>
		
	);
}
