"use client"
import React from 'react'
// import Body from "../../Components/Body.jsx"
import Body from "../Components/Body/Body.jsx"
import FreshProduce from "../Components/FreshProduce/FreshProduce.jsx"
import Spice from "../Components/Spice/Spice.jsx"
import BestSellers from '../Components/Best Sellers/BestSellers.jsx'
import Others from "../Components/Others.jsx"
import { Header } from '../Components/Header/Header.jsx'
import Footer from "../Components/Footer/Footer.jsx"

const Home = () => {
  return (
    <div>
        <Header/>
        <Body/>
        <FreshProduce/>
        <Spice/>
        <BestSellers/>
        <Others/>
        <Footer/>
    </div>
  )
}

export default Home;