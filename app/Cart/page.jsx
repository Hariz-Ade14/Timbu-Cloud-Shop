"use client";
import React from "react";
import "./cart.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import img1 from "../assets/img1.png";
import {useCart} from "react-use-cart";
import Link from "next/link";
import {FaTrash, FaTimes} from "react-icons/fa";
import {CartProvider} from "react-use-cart";
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

	const SubTotal = [];

	let val;

	return (
		<CartProvider>
			<div className='mt-28'>
				<h1 className='text-center fs-4'>Cart</h1>
				<p className='text-center mb-5'>
					Shop for <span className='text-danger'>$74</span> more to enjoy free
					delivery
				</p>

				<div className='table mt-10 d-flex mx-auto'>
					<table className='p-3 w-sm-50 w-75'>
						<tr className='py-4 thead'>
							<th className='py-4'>Product</th>
							<th className='text-center'>Quantity</th>
							<th>Price</th>
							<th>Subtotal</th>
						</tr>
						<tbody>
							{items.map((item, index) => {
								SubTotal.push(Number(item.quantity * item.price).toFixed(2));
								console.log(SubTotal);

								let sum = 0;
								for (let i = 0; i < SubTotal.length; i++) {
									sum += Number(SubTotal[i]);
									val = sum;
									console.log(typeof SubTotal[i]);
								}
								console.log(sum);

								return (
									<>
										<tr key={index} className='m-2'>
											<td className=' m-3'>
												<div className='flex my-3'>
													<FaTimes
														className='mt-10 times fw-light mx-3'
														onClick={() => removeItem(item.id)}
													/>
													<Image
														className='rounded'
														style={{width: "100px", height: "100px"}}
														src={item.image}
														width={"300px"}
													/>
													<div>
														<p className='flex align-middle sm:mt-10 mt-8 fw-bold ml-4'>
															{item.productName}
														</p>

														<div
															style={{height: ""}}
															className='quantity1 px-3'
														>
															<button
																className='btn reduce'
																onClick={() =>
																	updateItemQuantity(item.id, item.quantity - 1)
																}
															>
																-
															</button>
															<p className='mx-1 '>{item.quantity}</p>
															<button
																className='btn btn-danger'
																onClick={() =>
																	updateItemQuantity(item.id, item.quantity + 1)
																}
															>
																+
															</button>
														</div>
													</div>
												</div>
											</td>
											<td style={{height: "100px"}} className='mt-4 quantity'>
												<button
													className='btn reduce'
													onClick={() =>
														updateItemQuantity(item.id, item.quantity - 1)
													}
												>
													-
												</button>
												<p className='mx-1 '>{item.quantity}</p>
												<button
													className='btn btn-danger'
													onClick={() =>
														updateItemQuantity(item.id, item.quantity + 1)
													}
												>
													+
												</button>
											</td>

											<td className='price1'>${item.price}</td>
											<td className='price2'>
												<FaTimes
													className='mt-3'
													size={20}
													onClick={() => removeItem(item.id)}
												/>
												${Number(item.quantity * item.price).toFixed(2)}
											</td>
											<td className='subTotal'>
												{Number(item.quantity * item.price).toFixed(2)}
											</td>
										</tr>
									</>
								);
							})}
						</tbody>
					</table>
				</div>

				<div className='container-sm mt-4 container-fluid'>
					<div className='row firstrow'>
						<div className='col-sm-3 col-10 coupon p-2 mx-3'>
							<h6>Have a coupon?</h6>
							<p className='ayc'>Add your code for instant discount.</p>
							<div className='container-fluid'>
								<div className='inputs row flex justify-between'>
									<input
										type='text'
										className='mail col-7 mt-2 border-slate-300 bg-none py-1 px-3 rounded'
										placeholder='Input'
									/>
									<button className='btn btn-danger mt-2 mr-2 col-4'>
										Apply
									</button>
								</div>
							</div>
						</div>
						<div className='col-sm-3 mt-sm-0 mt-2 col-10 border p-2'>
							<table className='tb'>
								<tr>
									<th>Order Summary</th>
								</tr>
								<hr className='w-100'></hr>
								<br />
								<tr>
									<td>
										SubTotal: $
										{SubTotal.length != 0 ? Number(val).toFixed(2) : "0"}
									</td>
								</tr>
								<br />
								<tr>
									<td>Promo Code: ${Number(-14).toFixed(2)}</td>
								</tr>
								<br />
								<tr>
									<td>Shipping Fee: ${Number(10).toFixed(2)}</td>
								</tr>
								<br />
								<tr>
									<td>
										Grand Total: $
										{SubTotal.length != 0
											? Number(val - 14.0 + 10.0).toFixed(2)
											: "0"}
									</td>
								</tr>
							</table>
						</div>
					</div>
					<div className='container btns mt-5'>
						<div className='row flex justify-between'>
							<button className='col-sm-3 mx-sm-2 mx-0 col-6 btn btn-outline-danger'>
								Continue Shopping
							</button>
							<button className='col-sm-3 col-5 btn btn-danger'>
								<Link href='/Checkout'>Checkout</Link>
							</button>
						</div>
					</div>
				</div>
			</div>
		</CartProvider>
	);
};

export default Cart;
