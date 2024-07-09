"use client";
import React from "react";
import "./cd.css"
import Link from "next/link";
import {useCart} from "react-use-cart";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Cart/cart.css";
import {Header} from "../Components/Header/Header.jsx"

const Checkout2 = () => {
	const {items, removeItem} = useCart();
	const SubTotal = [];

	let val;

	let sum = 0;
	for (let i = 0; i < SubTotal.length; i++) {
		sum += Number(SubTotal[i]);
		val = sum;
		console.log(typeof SubTotal[i]);
	}
	console.log(sum);
	return (
		<>
		<Header/>
		<div>
			<h1 className='mt-24 text-center'>Checkout</h1>
			<div className='container'>
				<div className='row flex align-middle justify-around'>
					<div className='col-sm-8 col-12 rounded-sm  p-3'>
						<form className='checkform'>
                            <p>Card Infromation</p>
							<div class='form-row'>
								<div class='form-group'>
									<label>Card type</label>
									<input
										type='text'
										class='form-control'
										id='inputEmail4'
										placeholder='Card type'
									/>
								</div>
								<div class='form-group mt-3'>
									<label>Name on card</label>
									<input
										type='text'
										class='form-control'
										id='inputEmail4'
										placeholder='Name'
									/>
								</div>
							</div>
							<div class='form-group mt-3'>
								<label for='inputAddress'>Card number</label>
								<input
									type='number'
									class='form-control'
									id='inputAddress'
									placeholder='123-456-78910'
								/>
							</div>


							<div class='form-row row mt-3'>
								<div class='form-group col-6'>
									<label for='inputCity'>Expiration</label>
									<input
									type="date"
									class='form-control'
									placeholder=''
								/>
								</div>
								<div class='form-group col-6'>
									<label for='inputState'>CVV</label>
									<input type='number' class='form-control' placeholder='CVV' />
								</div>
							</div>

							<div className='firstbtns my-5 px-5'>
								<button type='submit' class='btn btn-outline-danger w-50'>
									<Link href='/Cart' className='text-danger no-underline'>
										Back to Cart
									</Link>
								</button>
								<button type='button' class='btn btn-danger w-50'>
									Next
								</button>
							</div>
						</form>
					</div>

					<div className='col-sm-3 mt-sm-0 mt-2 col-10 border'>
						<table className='tb'>
							<h3>Order Summary</h3>
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
											<td className='m-2'>
												<div className='flex my-3'>
													<Image alt="Image"
														className='rounded'
														style={{width: "100px", height: "100px"}}
														src={item.image}
														width={"300px"}
													/>
													<div>
														<p className='flex align-middle sm:mt-10 mt-8 fw-bold ml-3'>
															{item.productName}
														</p>

														<p className='ml-3'>{item.quantity}</p>
													</div>
												</div>
											</td>

											<td className='price1 mt-1 pt-1'>${item.price}</td>

											<td className='price2 pt-20'>
												${Number(item.quantity * item.price).toFixed(2)}
											</td>
										</tr>
									</>
								);
							})}
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
									<tr className="summary">
										<th>Order Summary</th>
									</tr>
									{/* <hr className='w-100'></hr> */}
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
									<Link className="text-danger no-underline" href="/Checkout">Previous</Link>
								</button>
								<button className='col-sm-3 col-5 btn btn-danger'>
									<Link className="text-white no-underline" href=''>Place order</Link>
									
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</>
	);
};

export default Checkout2;
