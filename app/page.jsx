"use client";
import Home from "./Home/page.jsx";
import {CartProvider} from "react-use-cart";

export default function App() {
	return (
		<CartProvider>
			<Home />
		</CartProvider>
	);
}
