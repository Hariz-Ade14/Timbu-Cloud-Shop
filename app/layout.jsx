"use client"
import "./globals.css";

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
