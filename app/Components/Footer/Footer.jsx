import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import {FaArrowRight} from "react-icons/fa"
const Footer = () => {
	return (
		<div className='footer container-fluid sm:p-24 mt-5 py-5'>
			<div className='row'>
				<div className='col-sm-3 col-3'>
					<ul className='list-style-none'>
						<p className='mb-3 ml-4 text-white'>Pages</p>
						<li>
							<a href='#' className='nav-link text-white'>
								About Us
							</a>
						</li>
						<li>
							<a href='#' className='nav-link text-white'>
								Contact Us
							</a>
						</li>
						<li>
							<a href='#' className='nav-link text-white'>
								Home
							</a>
						</li>
					</ul>
				</div>
				<div className='col-sm-3 col-3'>
					<ul className='list-style-none'>
						<p className='mb-3 ml-4 text-white'>Resources</p>
						<li>
							<a href='#' className='nav-link text-white'>
								Help Center
							</a>
						</li>
						<li>
							<a href='#' className='nav-link text-white'>
								FAQs
							</a>
						</li>
						<li>
							<a href='#' className='nav-link text-white'>
								Suggestions
							</a>
						</li>
						<li>
							<a href='#' className='nav-link text-white'>
								Return Policy
							</a>
						</li>
						<li>
							<a href='#' className='nav-link text-white'>
								Blogs
							</a>
						</li>
					</ul>
				</div>
				<div className='col-sm-3 col-5'>
					<ul className='list-style-none'>
						<p className='mb-3 ml-4 text-white'>Community</p>
						<li>
							<a href='#' className='nav-link text-white'>
								Community
							</a>
						</li>
						<li>
							<a href='#' className='nav-link text-white'>
								Documentations
							</a>
						</li>
						<li>
							<a href='#' className='nav-link text-white'>
								Brand Assets
							</a>
						</li>
						<li>
							<a href='#' className='nav-link text-white'>
								Blog
							</a>
						</li>
						<li>
							<a href='#' className='nav-link text-white'>
								Forum
							</a>
						</li>
						<li>
							<a href='#' className='nav-link text-white'>
								Mailing List
							</a>
						</li>
					</ul>
				</div>
				<div className='news col-sm-3 p-sm-0 p-3 col-12'>
					<ul className='list-style-none'>
						<p className='mb-3 text-white mx-sm-3 mx-3'>Newsletter</p>
						<li className='nav-link text-white'>
							Signup for our newsletter to get the latest news in your inbox.
						</li>
						<form>
							<div class="input-group input-group-sm mb-3">
								
								<div class="input-group mb-3">
								  <input type="text" className="my-3 Email text-white ml-sm-4 form-control" placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="basic-addon2">
								  <div class="input-group-append">
								    <button class="btn bg-danger text-white prepend" type="button"><FaArrowRight className="text-white"/></button>
								  </div>
								</div>
{/* 																
								<input
								type='text'
								className='my-3 Email text-white ml-sm-4'
								placeholder="Enter your email"
								/>
							         <div class="input-group-prepend prepend bg">
								    <button class="input-group-text" id="inputGroup-sizing-sm"><FaArrowRight/></button>
									 
								 </div> */}
							</div>	
						</form>
						<li className='nav-link text-white'>
							Your email is safe with us. We do not spam.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
