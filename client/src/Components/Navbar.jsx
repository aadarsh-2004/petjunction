import React, { useState } from 'react';
import logo from '../assets/petjunction.png';
import { IoIosArrowDown } from 'react-icons/io';
import { IoHomeOutline } from 'react-icons/io5';
import { BsShop } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import {Link} from 'react-router-dom'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <div className="navbar border-b-2 bg-white backdrop-blur-3xl border-none shadow-2xl pl-6   rounded-b-4xl flex justify-between items-center fixed top-0 left-2 right-2 md:left-30 md:right-30 z-80">
      <img className="w-25 h-25 " src={logo} alt="PetJunction Logo" />

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden flex items-center cursor-pointer" onClick={toggleMenu}>
        <FaBars className="text-2xl text-[#f83e2d]" />
      </div>

      {/* Navigation Links for Desktop */}
      <div className="navoptions font-medium text-lg font-sans text-black md:flex md:space-x-14 md:mr-12 md:cursor-pointer hidden">
        <ul className="flex space-x-14">
          <Link to="/" >
            <li className="flex items-center gap-1">
              <IoHomeOutline className="text-[#f83e2d]" /> Home
            </li>
          </Link>


          <Link to="/shop">
          <li className="flex items-center gap-2">
            <BsShop className="text-[#f83e2d]" /> Shop
          </li>
          </Link>


          <li className="relative flex items-center gap-1 cursor-pointer"  onClick={toggleServicesMenu}>
            Pet Services
            <IoIosArrowDown className="text-lg text-[#f83e2d]" />
            {isServicesOpen && (
              <div className="absolute flex bg-white items-center justify-evenly shadow-2xl right-0 space-x-30 top-15    rounded-xl w-18/2  z-20 mt-2 p-8 ">
                <div className="flex-col items-center justify-center cursor-pointer">
                  <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/service3.svg" className='w-10 h-10 ml-5' alt="" />
                  
                  <h3 className='text-[14px] '>Dog Walking</h3>  
                </div>
                <div className="flex-col items-center gap-1 cursor-pointer">
                
                <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/service4.svg" className='w-10 h-10 ml-5' alt="" />
                  
                  <h3 className='text-[14px]'>Dog Gromming</h3>
                  
                </div>

                <div className="flex-col items-center gap-1 cursor-pointer">
                <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/service5.svg" className='w-10 h-10 ml-5' alt="" />
                  <h3 className='text-[14px]'>Dog Boarding</h3>     
                </div>
                <div className="flex-col items-center  gap-1 cursor-pointer">
                <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/service6.svg" className='w-10 h-10 ml-5' alt="" />
                  
                  <h3 className='text-[14px]'>Dog Sitting</h3>
                
                    
                </div>
              </div>
            )}
          </li>




          <li className="relative flex items-center gap-1 cursor-pointer">
            Support
            <IoIosArrowDown className="text-lg text-[#f83e2d]" />
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown Menu (shown when hamburger icon is clicked) */}
      {isMenuOpen && (
        <div className="absolute right-0 top-full bg-white border border-gray-200 shadow-lg rounded-md w-fit z-20 mt-2 md:hidden">
          <ul className="flex flex-col space-y-4 p-4">
            <li className="flex items-center gap-2 cursor-pointer">
              <BsShop className="text-[#f83e2d]" /> Shop
            </li>
            <li className="flex items-center gap-1 cursor-pointer">
              Pet Services <IoIosArrowDown className="text-lg text-[#f83e2d]" />
            </li>
            <li className="flex items-center gap-1 cursor-pointer">
              Support <IoIosArrowDown className="text-lg text-[#f83e2d]" />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;