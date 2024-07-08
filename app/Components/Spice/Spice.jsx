import React from 'react'
import data from "./data.jsx"
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import "../FreshProduce/FreshProduce.css"

const Spice = () => {
  return (

    <div className='container my-14'>
			<h1 className='mb-4'>Spice</h1>
			<div className='row d-flex align-items-center justify-content-between'>
				{data.map((item) => {
					return (
						<div key={item.id} className='col-md-2 col-sm-3 col-5 colm mx-2 my-3 border'>
							<Image
								className='img'
								src={item.image}
							/>
							<div className='about flex align-middle justify-between'>
								<div>
									<p>{item.productName}</p>
									<p className="price">{item.price}</p>
								</div>
								<p className=' cart'>{item.cartIcon}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
  )
}

export default Spice