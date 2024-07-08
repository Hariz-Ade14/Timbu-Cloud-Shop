import React from "react";
import img11 from "../../assets/img11.jpg";
import img12 from "../../assets/img12.jpg"
import img13 from "../../assets/img13.jpg";
import img14 from "../../assets/img14.jpg";
import img15 from "../../assets/img15.jpg";
import img16 from "../../assets/img16.jpg";
import img17 from "../../assets/img17.jpg";
import img18 from "../../assets/img18.jpg";
import img19 from "../../assets/img19.jpg";
import img20 from "../../assets/img20.jpg"
import {AiOutlineHeart ,AiOutlineShoppingCart} from "react-icons/ai";

const data = [
	{
		id: 11,
		image: img11,
		productName: "Garlic",
		price: 25.99,
		icon: <AiOutlineHeart/>,
		cartIcon: <AiOutlineShoppingCart size={20}/>,
	},
	{
		id: 12,
		image: img12,
		productName: "Ketchup",
		price: 29.99,
		icon: <AiOutlineHeart/>,
		cartIcon: <AiOutlineShoppingCart size={20}/>,
	},
	{
		id: 13,
		image: img13,
		productName: "Blackpepper",
		price: 22.99,
		icon: <AiOutlineHeart/>,
		cartIcon: <AiOutlineShoppingCart size={20}/>,
	},
	{
		id: 14,
		image: img14,
		productName: "Chilli",
		price: 19.99,
		icon: <AiOutlineHeart/>,
		cartIcon: <AiOutlineShoppingCart size={20}/>,
	},
	{
		id: 15,
		image: img15,
		productName: "Mustard",
		price: 29.99,
		icon: <AiOutlineHeart/>,
		cartIcon: <AiOutlineShoppingCart size={20}/>,
	},
	{
		id: 16,
		image: img16,
		productName: "Nutmeg",
		price: 26.99,
		icon: <AiOutlineHeart/>,
		cartIcon: <AiOutlineShoppingCart size={20}/>,
	},
	{
		id: 17,
		image: img17,
		productName: "Paprika",
		price: 22.99,
		icon: <AiOutlineHeart/>,
		cartIcon: <AiOutlineShoppingCart size={20}/>,
	},
	{
		id: 18,
		image: img18,
		productName: "Soy Sauce",
		price: 23.99,
		icon: <AiOutlineHeart/>,
		cartIcon: <AiOutlineShoppingCart size={20}/>,
	},
	{
		id: 19,
		image: img19,
		productName: "Cinnamon",
		price: 27.99,
		icon: <AiOutlineHeart/>,
		cartIcon: <AiOutlineShoppingCart size={20}/>,
	},
	{
		id :20,
		image: img20,
		productName: "Seasoning",
		price: 59.99,
		icon: <AiOutlineHeart/>,
		cartIcon: <AiOutlineShoppingCart size={20}/>,
	},
];

export default data;