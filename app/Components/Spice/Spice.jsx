import React from 'react'
import data from "./data.jsx"
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import "../FreshProduce/FreshProduce.css"
import {useCart} from "react-use-cart";

const Spice = () => {
	const {addItem} = useCart();

  return (

    <div className='container my-14'>
			<h1 className='mb-4'>Spice</h1>
			<div className='row fresh'>
				{data.map((item) => {
					return (
						<div
							key={item.id}
							className='col-md-2 col-sm-3 col-5 colm mx-2 border'
						>
							<Image alt="image" className='img' src={item.image} />
							<div className='about mb-0 flex align-middle justify-between'>
								<div className='h-75'>
									<p>{item.productName}</p>
									<p className='price'>${item.price}</p>
								</div>
								<button
									className='cart'
									onClick={() => {
										addItem(item);
										
									}}
								>
									{item.cartIcon}
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
  )
}

export default Spice