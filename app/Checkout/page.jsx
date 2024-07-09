"use client";
import React from "react";
import "./checkout.css";
import Link from "next/link";
import {useCart} from "react-use-cart";
import {FaTimes} from "react-icons/fa";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Cart/cart.css";
import "./checkout.css"
import { Header } from "../Components/Header/Header";

const Checkout = () => {
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
			<h1 className='mt-24 text-center '>Checkout</h1>
			<div className='container'>
				<div className='row flex align-stretch justify-around'>
					
					<div className='col-sm-8 col-12 rounded-sm  p-3'>
						
						<form className='checkform'>
							<p>Personal Details</p>
							<div class='form-row'>
								<div class='form-group'>
									<label>Full Name</label>
									<input
										type='text'
										class='form-control'
										id='inputEmail4'
										placeholder='Full Name'
									/>
								</div>
								<div class='form-group mt-3'>
									<label>Email</label>
									<input
										type='text'
										class='form-control'
										id='inputEmail4'
										placeholder='Email'
									/>
								</div>
							</div>
							<div class='form-group mt-3'>
								<label for='inputAddress'>Address</label>
								<input
									type='text'
									class='form-control'
									id='inputAddress'
									placeholder=''
								/>
							</div>

							<div class='form-row row mt-3'>
								<div class='form-group col-6'>
									<label for='inputCity'>State</label>
									<select id='inputState' class='form-control'>
										<option>Lagos</option>
										<option>Oyo</option>
									</select>
								</div>
								<div class='form-group col-6'>
									<label for='inputState'>Province</label>
									<input type='text' class='form-control' id='inputCity' />
								</div>
							</div>

							<div class='form-row row mt-3'>
								<div class='form-group col-6'>
									<label for='inputCity'>Zip</label>
									<select id='inputState' class='form-control'>
										<option>----</option>
										<option>----</option>
									</select>
								</div>
								<div class='form-group col-6'>
									<label for='inputState'>Phone Number</label>
									<input type='text' class='form-control' id='inputCity' />
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

					<div className='col-sm-3 mt-sm-0 m-0 col-10 p-0 coup'>
						<div className='tb'>
							<table>
							<h4>Order Summary</h4>
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
										<tr key={index} className='my-3 eachprod'>
											<td className=''>
												<div className='flex my-3 p-0'>
													<Image alt="Image"
														className='rounded my-0 prodImg'
														
														src={item.image}
													
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
						

						<div className='mt-4 container'>
						
							
							<div className='mx-2 mt-3'>
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
						<div className='mt-sm-0 mt-2 p-2'>
								<table className='checktab w-100'>
									<tr>
										<td className="flex justify-between">
											<p>SubTotal </p>
											<p>${SubTotal.length != 0 ? Number(val).toFixed(2) : "0"}</p>
										</td>
									</tr>
									<tr>
										<td><p>Promo Code</p><p>${Number(-14).toFixed(2)}</p></td>
									</tr>
									<tr>
										<td><p>Shipping Fee</p> <p>${Number(10).toFixed(2)}</p> </td>
									</tr>
									<tr>
										<td>
											<p>Grand Total</p> 
											<p>${SubTotal.length != 0
												? Number(val - 14.0 + 10.0).toFixed(2)
												: "0"}</p>
										</td>
									</tr>
								</table>
							</div>
							
						<div className='container secondBtns mt-5 mb-4'>
							<div className='row'>
								<button className='col-sm-3 mx-sm-2 mx-0 col-6 btn btn-danger'>
									<Link className="text-white no-underline" href="/Cart">Back to Cart</Link>
								</button>
								<button className='col-sm-3 col-5 btn btn-danger'>
									<Link className="text-white no-underline" href='/Card'>Next</Link>
									
								</button>
							</div>
						</div>
					    </div>
					</div>

					
				</div>
			</div>
		</div>
		</>
	);
};

export default Checkout;
