"use client";
import React from "react";
import "./cart.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import img1 from "../assets/img1.png";
import {useCart} from "react-use-cart";
import Link from "next/link";

const Cart = () => {
	const {
		isEmpty,
		totalUniqueItems,
		items,
		totalItems,
		cartTotal,
		updateItemQuantity,
		removeItem,
		emptyCart,
	} = useCart();

	// if (isEmpty) return <p>Your cart is empty</p>;

	return (
		<div className='mt-28'>
			<h1 className='text-center fs-4'>Cart</h1>
			<p className='text-center'>
				Shop for <span className='text-danger'>$74</span> more to enjoy free
				delivery
			</p>

			<div className='table mt-10 d-flex mx-auto'>
				<table>
					<tr>
						<th>Product</th>
						<th>Quantity</th>
						<th>Price</th>
						<th>Subtotal</th>
					</tr>
					<tr>
						{items.map((item) => {
							return (
								<>
									{" "}
									<td>
										<Image src={item.image} />
									</td>
									<td>{item.productName}</td>
								</>
							);
						})}
						{/* <td>
                         <Image src={img1} className='img'/>
                     </td>
                     <td className='d-flex align-items-center justify-content-between'>
                        <button className='btn btn-danger'>-</button>
                        <p className=''>5</p> 
                        <button className='btn btn-danger'>+</button> 
                     </td>
                     <td></td>
                     <td></td> */}
					</tr>
				</table>
			</div>

			<div className='container-sm container-fluid'>
				<div className='row firstrow'>
					{/* <div className='col-3 Col'></div> */}
					<div className='col-sm-3 col-10 border rounded-lg p-2 mx-3'>
						<h6>Have a coupon?</h6>
						<p className='ayc'>Add your code for instant discount.</p>
						<div className='inputs row px-3'>
							<input
								type='text'
								className='mail col-7 border-slate-300 bg-none py-1 px-3 rounded'
								placeholder='Input'
							/>
							<button className='btn btn-danger mr-sm-0 mr-2 col-3'>
								Apply
							</button>
						</div>
					</div>
					<div className='col-sm-3 col-10 border rounded-xl p-2'>
						<table className='tb'>
							<tr>
								<th>Order Summary</th>
							</tr>
							<br />
							<tr>
								<td>SubTotal</td>
							</tr>
							<br />
							<tr>
								<td>Promo Code</td>
							</tr>
							<br />
							<tr>
								<td>Shipping Fee</td>
							</tr>
							<br />
							<tr>
								<td>Grand Total</td>
							</tr>
						</table>
					</div>
				</div>
				<div className='container btns mt-5 '>
					<div className='row'>
						<button className='col-sm-3 col-5 btn btn-outline-danger'>
							Continue Shopping
						</button>
						<button className='col-sm-3 col-5 btn btn-danger'>
							<Link href='/Checkout'>Checkout</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
