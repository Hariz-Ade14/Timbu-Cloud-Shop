import React from "react";
import img21 from "../../assets/img21.jpg";
import img22 from "../../assets/img22.jpg"
import img23 from "../../assets/img23.jpg";
import img24 from "../../assets/img24.jpg";
import img25 from "../../assets/img25.jpg";
import img26 from "../../assets/img26.png";
import img27 from "../../assets/img27.jpg";
import img28 from "../../assets/img28.jpg";
import img29 from "../../assets/img29.jpg";
import img30 from "../../assets/img30.jpg"
import {AiOutlineHeart ,AiOutlineShoppingCart} from "react-icons/ai";

const data = [
	{
		id: 21,
		image: img21,
		productName: "Popcorn",
		price: "$22.99",
		icon: <AiOutlineHeart/>,
		cartIcon: <AiOutlineShoppingCart size={20}/>,
	},
	{
		id: 22,
		image: img22,
		productName: "Chocolate",
		price: "$23.99",
		icon: <AiOutlineHeart/>,
		cartIcon: <AiOutlineShoppingCart size={20}/>,
	},
	{
		id: 23,
		image: img23,
		productName: "Nuts",
		price: "$24.99",
		icon: <AiOutlineHeart/>,
		cartIcon: <AiOutlineShoppingCart size={20}/>,
	},
	{
		id: 24,
		image: img24,
		productName: "Oats",
		price: "$28.99",
		icon: <AiOutlineHeart/>,
		cartIcon: <AiOutlineShoppingCart size={20}/>,
	},
	{
		id: 25,
		image: img25,
		productName: "Butter",
		price: "$46.99",
		icon: <AiOutlineHeart/>,
		cartIcon: <AiOutlineShoppingCart size={20}/>,
	},
	{
		id: 26,
		image: img26,
		productName: "Apples",
		price: "$25.99",
		icon: <AiOutlineHeart/>,
		cartIcon: <AiOutlineShoppingCart size={20}/>,
	},
	{
		id: 27,
		image: img27,
		productName: "Rice",
		price: "$7p.99",
		icon: <AiOutlineHeart/>,
		cartIcon: <AiOutlineShoppingCart size={20}/>,
	},
	{
		id: 28,
		image: img28,
		productName: "Pasta",
		price: "$69.99",
		icon: <AiOutlineHeart/>,
		cartIcon: <AiOutlineShoppingCart size={20}/>,
	},
	{
		id: 29,
		image: img29,
		productName: "Milk",
		price: "$39.99",
		icon: <AiOutlineHeart/>,
		cartIcon: <AiOutlineShoppingCart size={20}/>,
	},
	{
		id :30,
		image: img30,
		productName: "Eggs",
		price: "$29.99",
		icon: <AiOutlineHeart/>,
		cartIcon: <AiOutlineShoppingCart size={20}/>,
	},
];

export default data;