import React from "react";
import {AiOutlineCar, AiOutlineShoppingCart} from "react-icons/ai";
import {IoBagAddOutline, IoArrowBack} from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css";

const Others = () => {
	return (
		<div className='container my-24'>
			<div className='row d-flex align-items-start justify-content-between'>
				<div className='col-3 p-2'>
					<div>
						<AiOutlineCar
							size={45}
							color='white'
							className='rounded d-flex p-2 mx-auto bg-danger'
						/>
					</div>
					<p className="text-center">Fast Delivery</p>
				</div>
				<div className='col-3 p-2'>
					<div>
						<IoBagAddOutline
							size={45}
							color='white'
							className='rounded d-flex p-2 mx-auto bg-danger'
						/>
					</div>
					<p className="text-center">Easy to shop</p>
				</div>
				<div className='col-3 p-2'>
					<div >
						<AiOutlineShoppingCart
							size={45}
							color='white'
							className='rounded d-flex p-2 mx-auto bg-danger'
						/>
					</div>
					<p className="text-center">24/7 Service</p>
				</div>
				<div className='col-3 p-2'>
					<div>
						<IoArrowBack
							size={45}
							color='white'
							className='rounded d-flex p-2 mx-auto bg-danger'
						/>
					</div>
					<p className="text-center">Easy Return</p>
				</div>
			</div>
		</div>
	);
};

export default Others;
