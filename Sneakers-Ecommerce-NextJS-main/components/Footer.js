import { BsCashStack } from 'react-icons/bs';
import { BiLogoPaypal } from 'react-icons/bi';
import { FaPaypal } from'react-icons/fa';
import Link from "next/link";
import { useState } from 'react';
import { MdOutlineKeyboardDoubleArrowUp, MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md';
import {AiFillHeart} from 'react-icons/ai';

export default function Footer() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showHearts, setShowHearts] = useState(false);

  const handleHeartClick = () => {
    setShowHearts(true);
    setTimeout(() => {
      setShowHearts(false);
    }, 1000); // Adjust the time (in milliseconds) for how long the hearts should be visible before disappearing.
  };
  // const handleHeartClick = () => {
  //   setIsHeartFilled(!isHeartFilled);
  // };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full border border-t-2 pt-4 pb-6">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-center font-mono tracking-tighter">
          {/* Service */}
          <div className={`text-center ${isMobileMenuOpen ? 'hidden md:block' : ''}`}>
            <div className="font-bold mb-4">Service</div>
            <ul>
              <Link href="/sneaker-sourcing">
                <li>Sneaker Sourcing</li>
              </Link>
            </ul>
          </div>

          {/* Support */}
          <div className={`text-center ${isMobileMenuOpen ? 'hidden md:block' : ''}`}>
            <h2 className="font-bold mb-4">Support</h2>
            <ul>
              <Link href="/contact-us">
                <li>Contact Us</li>
              </Link>
            </ul>
          </div>

          {/* Policy */}
          <div className={`text-center ${isMobileMenuOpen ? 'hidden md:block' : ''}`}>
            <h2 className="font-bold mb-4">Policy</h2>
            <ul>
              <Link href="/shipping-return">
                <li>Shipping & Return</li>
              </Link>
            </ul>
          </div>

          {/* Payment */}
          <div className={`text-center ${isMobileMenuOpen ? 'hidden md:block' : ''}`}>
            <h2 className="font-bold mb-4">Payment</h2>
            <div className="flex items-center justify-center">
              <BsCashStack className="mr-2" />
              <FaPaypal />
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden text-center">
            <button
              onClick={toggleMobileMenu}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              {isMobileMenuOpen ? (
                <MdOutlineKeyboardDoubleArrowUp size={30} />
              ) : (
                <MdOutlineKeyboardDoubleArrowDown size={30} />
              )}
            </button>
          </div>
        </div>

        <div className={`text-center mt-6 ${isMobileMenuOpen ? 'block' : 'hidden md:block'}`}>
          <p className=" font-extrabold tracking-tighter">
            &copy; 2023 SoleKachi. All rights reserved.
          </p>
          {/* <p className="text-gray-500 font-extrabold tracking-tighter">
            &copy; Build by Nam Tran with <AiFillHeart/>
          </p> */}
               {/* <div className="flex items-center justify-center">
        <p className="text-gray-500 font-extrabold tracking-tighter">
          Build by Nam Tran with
        </p>
        <span
          className={`heart-icon inline-flex items-center ml-2 ${
            isHeartFilled ? "animate-heart" : ""
          }`}
          onClick={handleHeartClick}
        >
          <AiFillHeart />
        </span>
      </div> */}
<div className="flex items-center justify-center">
<p className="text-md font-extrabold tracking-tighter font-mono">
          Built by{" "}
          <a href="mailto:namtran161203@gmail.com" className="underline">
            Nam Tran
          </a>{" "}
          with
        </p>
        <span
          className={`heart-icon inline-flex items-center ml-2 ${
            showHearts ? "animate-hearts" : ""
          }`}
          onClick={handleHeartClick}
        >
          <AiFillHeart style={{ color: showHearts ? "red" : "inherit" }}  size={25}/>
          {showHearts && (
            <>
              <AiFillHeart className="animate-heart" style={{ color: "red" }} />
              <AiFillHeart className="animate-heart" style={{ color: "red" }} />
              <AiFillHeart className="animate-heart" style={{ color: "red" }} />
            </>
          )}
        </span>
      </div>
      
        </div>
      </div>
    </div>
  );
}