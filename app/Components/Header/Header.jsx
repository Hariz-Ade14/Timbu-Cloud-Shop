"use client";
import React, {useRef, useState} from "react";
import {CiApple} from "react-icons/ci";
import {
	AiOutlineMenu,
	AiOutlineHeart,
	AiOutlineSearch,
	AiOutlineShoppingCart,
	AiOutlineUser,
	AiOutlineBars,
} from "react-icons/ai";
import "./Header.css";
import Link from "next/link";
import {CgMenuGridR} from "react-icons/cg";
import {CartProvider} from "react-use-cart";
export const Header = () => {
	const menuRef = useRef();

	const Menu = () => {
		menuRef.current.style.display = "block";
	};

	const Cancel = () => {
		menuRef.current.style.display = "none";
	};
	return (
		<>
			<CartProvider>
				<div className='header flex align-middle justify-between px-sm-5 p-2 py-3'>
					<div className='brandName flex'>
						<CiApple size={25} />
						<p>grocer</p>
					</div>
					<div className='menuList'>
						<ul className=''>
							<li>Home</li>
							<li>
								<Link href='/'>Products</Link>
							</li>
							<li>About Us</li>
							<li>Contact Us</li>
						</ul>
					</div>
					<div className='others flex align-middle justify-between'>
						<AiOutlineHeart size={20} className='heart mx-2' />
						<Link href='/Cart'>
							<AiOutlineShoppingCart size={20} className='Cart mx-2' />
						</Link>

						<AiOutlineSearch size={20} className='Search mx-2' />
						<AiOutlineUser size={20} className='User mx-2' />
						<AiOutlineMenu onClick={Menu} size={30} className='bars mx-2' />
					</div>

					<div className='menuMob' ref={menuRef}>
						<h2 className='cancel' onClick={Cancel}>
							X
						</h2>
						<ul className=''>
							<li>Home</li>
							<li>
								<Link href='/Pages/Home'>Products</Link>
							</li>
							<li>About Us</li>
							<li>Contact Us</li>
						</ul>
						<div className='flex align-middle justify-start mx-3 p-0 w-50'>
							<AiOutlineHeart size={20} className='mx-2' />
							<AiOutlineSearch size={20} className='mx-2' />
							<AiOutlineUser size={20} className='mx-2' />
						</div>
					</div>
				</div>
			</CartProvider>
		</>
	);
};
