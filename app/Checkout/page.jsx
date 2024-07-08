"use client";
import React from "react";
import "./checkout.css";
import Link from "next/link";

const Checkout = () => {
	return (
		<div>
			<h1 className='mt-24 text-center'>Checkout</h1>
			<div className='container'>
				<div className='row flex align-middle justify-around'>
					<div className='col-sm-8 col-12 rounded-sm  p-3'>
						<form className='checkform'>
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
								<div class='form-group col-md-6'>
									<label for='inputCity'>State</label>
									<select id='inputState' class='form-control'>
										<option>Lagos</option>
										<option>Oyo</option>
									</select>
								</div>
								<div class='form-group col-md-6'>
									<label for='inputState'>Province</label>
									<input type='text' class='form-control' id='inputCity' />
								</div>
							</div>

							<div class='form-row row mt-3'>
								<div class='form-group col-md-6'>
									<label for='inputCity'>Zip</label>
									<select id='inputState' class='form-control'>
										<option>Lagos</option>
										<option>Oyo</option>
									</select>
								</div>
								<div class='form-group col-md-6'>
									<label for='inputState'>Phone Number</label>
									<input type='text' class='form-control' id='inputCity' />
								</div>
							</div>

							<div className='firstbtns my-5 px-5'>
								<button  type='submit' class='btn btn-outline-danger w-50'>
									<Link href="/Cart" className="text-danger no-underline">Back to Cart</Link>
								</button>
								<button type='button' class='btn btn-danger w-50'>
									Next
								</button>
							</div>
						</form>
					</div>
					<div className='col-sm-3 col-12 checkpay'>
						<div></div>
						<div className='tbl'>
							<table className='tb'>
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

						<div className='mt-5 coupon'>
							<h5>Have a coupon?</h5>
							<p className='aycc'>Add your code for instant discount.</p>
							<div className='row px-3'>
								<input
									type='text'
									className='inp col-7 border rounded text-dark'
									placeholder='Input'
								/>
								<button className='btn btn-danger mr-sm-0 mx-1 col-4'>
									Apply
								</button>
							</div>

							<div className='secondbtns my-5 px-5'>
								<button type='submit' class='btn btn-outline-danger w-50'>
									Back to Cart
								</button>
								<button type='submit' class='btn btn-danger w-50'>
									<Link href="/Cart" className="text-danger no-underline">Back to Cart</Link>
									 
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
