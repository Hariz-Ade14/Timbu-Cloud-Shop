import React from "react";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.jpg";
import img10 from "../../assets/img10.jpg"
import {AiOutlineHeart ,AiOutlineShoppingCart} from "react-icons/ai";

const data = [
	{
		id: 1,
		image: img1,
		productName: "Apples",
		price: "$25.99",
		icon: <AiOutlineHeart/>,
		cartIcon: <AiOutlineShoppingCart size={20}/>,
	},
	{
		id: 2,
		image: img2,
		productName: "Brocolli",
		price: "$29.99",
		icon: <AiOutlineHeart/>,
		cartIcon: <AiOutlineShoppingCart size={20}/>,
	},
	{
		id: 3,
		image: img3,
		productName: "Mangoes",
		price: "$16.99",
		icon: <AiOutlineHeart/>,
		cartIcon: <AiOutlineShoppingCart size={20}/>,
	},
	{
		id: 4,
		image: img4,
		productName: "Strawberries",
		price: "$24.99",
		icon: <AiOutlineHeart/>,
		cartIcon: <AiOutlineShoppingCart size={20}/>,
	},
	{
		id: 5,
		image: img5,
		productName: "Lemon",
		price: "$29.99",
		icon: <AiOutlineHeart/>,
		cartIcon: <AiOutlineShoppingCart size={20}/>,
	},
	{
		id: 6,
		image: img6,
		productName: "Sugar",
		price: "$25.99",
		icon: <AiOutlineHeart/>,
		cartIcon: <AiOutlineShoppingCart size={20}/>,
	},
	{
		id: 7,
		image: img7,
		productName: "Flour",
		price: "$89.99",
		icon: <AiOutlineHeart/>,
		cartIcon: <AiOutlineShoppingCart size={20}/>,
	},
	{
		id: 8,
		image: img8,
		productName: "Corn",
		price: "$25.99",
		icon: <AiOutlineHeart/>,
		cartIcon: <AiOutlineShoppingCart size={20}/>,
	},
	{
		id: 9,
		image: img9,
		productName: "Carrot",
		price: "$27.99",
		icon: <AiOutlineHeart/>,
		cartIcon: <AiOutlineShoppingCart size={20}/>,
	},
	{
		id :10,
		image: img10,
		productName: "Potatoes",
		price: "$49.99",
		icon: <AiOutlineHeart/>,
		cartIcon: <AiOutlineShoppingCart size={20}/>,
	},
];

export default data;