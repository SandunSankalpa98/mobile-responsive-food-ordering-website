import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaTruck } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { FaWallet } from "react-icons/fa6";
import { IoIosHelpCircle } from "react-icons/io";
import { IoPricetag } from "react-icons/io5";
import { BsArrowDownRightSquareFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";

import React, {useState} from "react";


const Navbar = () => {
    const [nav,setNav] = useState(false)
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">

        {/* left side */}
        <div className="flex items-center">
            <div  onClick={()=> setNav(!nav)} className="cursor-pointer">
                <AiOutlineMenu  size={30}/>
            </div>
            <h1 className="text-2xl  sm:text-3xl lg:text-4xl px-2">
                BEST <span className="font-bold">Eats</span>
            </h1>
            <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
                <p className="bg-black text-white rounded-full p-2">Delivery</p>
                <p className="p-2">Pickup</p>
            </div>
        </div>

        {/* Search input */}
        <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] pl-4 pr-4">
            <AiOutlineSearch size={20} />
            <input type="text"  className="bg-transparent p-2 w-full focus:outline-none" placeholder="search foods"/>
        </div>

        {/* cart button */}
        <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
            <FaShoppingCart  size={20} className="mr-2"/>
        </button>

        {/* mobile menu */}
        {/* overlay */}

        {nav ? <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div> : '' }
        

        {/* side drawer menu */}
        <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 ':  'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'  }  >
            <IoIosCloseCircleOutline size={30} className="absolute right-4 top-4 cursor-pointer" 
            onClick={() => setNav(!nav)}
            />

            <h2 className="text-2xl p-4">
                BEST <span className="font-bold">Eats</span>
            </h2>

            <nav>
                <ul className="flex flex-col p-4 text-gray-800">
                    <li className="text-xl py-4 flex"><FaTruck size={25} className="mr-4"/> Orders</li>
                    <li className="text-xl py-4 flex"><MdFavorite size={25} className="mr-4"/> Favourits</li>
                    <li className="text-xl py-4 flex"><FaWallet size={25} className="mr-4"/> Wallet</li>
                    <li className="text-xl py-4 flex"><IoIosHelpCircle size={25} className="mr-4"/> Help</li>
                    <li className="text-xl py-4 flex"><IoPricetag size={25} className="mr-4"/> Promotion</li>
                    <li className="text-xl py-4 flex"><BsArrowDownRightSquareFill size={25} className="mr-4"/> Best Ones</li>
                    <li className="text-xl py-4 flex"><FaUserFriends size={25} className="mr-4"/> Invite Friends</li>
                </ul>
            </nav>

        </div>
    </div>
  )
}

export default Navbar;
