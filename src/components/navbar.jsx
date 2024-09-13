import React from 'react'
import logo from "../assets/image/logo.png"
const Navbar = () => {
  return (
    <div className="bg-white h-[60px] rounded-lg m-2 flex justify-center items-center gap-2 text-xl font-semibold">
        <img src={logo} alt="icon" />
        <h1>Firebase Contact App</h1>

        </div>
  )
}

export default Navbar