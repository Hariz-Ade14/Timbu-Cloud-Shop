import React from 'react'
import bgImg from "../../assets/bgImg.png"
import Image from 'next/image'
import "./Body.css"

const Body = () => {
  return (
    <div>
        <Image src={bgImg} className='image'/>
    </div>
  )
}

export default Body