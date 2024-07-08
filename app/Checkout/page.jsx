"use client";
import React from "react";
import "./checkout.css";
import Link from "next/link";

const Checkout = () => {
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
			</div>
		</div>
	);
};

export default Checkout;
