import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu,AiOutlineShoppingCart  } from "react-icons/ai";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { useState, useEffect } from "react";
import {AiOutlineSearch} from 'react-icons/ai'
import { useContext } from "react";
import { CartContext, CartContextProvider } from "./CartContext";

export default function Header() {

    const {cartProducts} = useContext(CartContext);

    const [isOpen, setIsOpen] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [linkcolor, setLinkcolor] = useState("black");
    const [navBg,setNavBg] = useState('#transparent');

    // useEffect(()=>{
    //     setNavBg('transparent');
    // })


    const handleNavigation = () =>{
        setIsOpen(!isOpen);
    }

    useEffect(() => {
            const handleShadow = () =>{
                if(window.scrollY >= 90 ){
                    setShadow(true);
                    setNavBg("#ffffff");
            }
            else
            {
                setShadow(false);
                setNavBg("transparent");
            }};
            window.addEventListener("scroll", handleShadow);        
            
            return () => {
                window.removeEventListener("scroll", handleShadow);
              };
                  
        },[]);
    

    return (
//         <header className={
//             shadow 
//             ? 'fixed w-full h-20 shadow-xl z-[100] ' 
//             : 'fixed w-full shadow-sm h-20 z-[100] '} 
//             style={{ backgroundColor: navBg }}>

//             <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
//                 <Link href={'/'} className="text-2xl">NotNullSole</Link>
//                 <div>
//                     <ul style={{color:`${linkcolor}`}} className="hidden md:flex">
//                         <Link href="/browse">
//                             <li className="ml-10 text-sm hover:border-b ">
//                                 Browse
//                             </li>
//                         </Link>

//                         <Link href="/categories">
//                             <li className="ml-10 text-sm hover:border-b">
//                                 Categories
//                             </li>
//                         </Link>

//                         <Link href="/account">
//                             <li className="ml-10 text-sm hover:border-b">
//                                 Account
//                             </li>
//                         </Link>

//                         <Link href="/cart">
//                             <li className="ml-10 text-sm hover:border-b">
//                                 Cart({cartProducts.length})
//                             </li>
//                         </Link>

//                         <Link href="/search">
//                             <li className="ml-10 text-sm hover:border-b">
//                             <AiOutlineSearch size={20} />
//                             </li>
//                         </Link>
//                     </ul>
//                     <div className="flex items-center">
//             <div className="md:hidden mr-4">
//             <Link href="/search">
//             <AiOutlineSearch size={30} />
//             </Link>
//             </div>
//             <div onClick={handleNavigation} className="md:hidden">
              
//               <AiOutlineMenu size={30} />
//             </div>
//           </div>
     
//                 </div>
//             </div>
//             <div className={
//                 isOpen 
//                 ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ' 
//                 : ''}>
//                 <div className={
//                     isOpen 
//                     ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500' 
//                     :'fixed left-[-100%] top-0 ease-in duration-500'}>
//                     <div>
//                         <div className="flex w-full items-center justify-between">
//                             {/* <Image src='/' alt="/" /> */}
//                             <h1 className="text-2xl">NotNullSole</h1>
//                             <div onClick={handleNavigation} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
//                                 <MdOutlineKeyboardDoubleArrowLeft/>
//                             </div>
//                         </div>
//                         <div className="border-b border-gray-300 my-4">
//                             <p className="w-[85%] md:w-[90%] py-4">Elevate Your Fashion, Sneakers in Passion</p>
//                         </div>
//                     </div>

//                     <div className="py-4 flex-col">
//                         <ul>
//                         <Link href="/browse">
//                             <li className="py-4 text-sm ">
//                                 Browse
//                             </li>
//                         </Link>
//                         <Link href="/categories">
//                             <li className="py-4 text-sm ">
//                                 Categories
//                             </li>
//                         </Link>
//                         <Link href="/account">
//                             <li className="py-4 text-sm ">
//                                 Account
//                             </li>
//                         </Link>
//                         <Link href="/cart">
//                             <li className="py-4 text-sm ">
//                                 Cart({cartProducts.length})
//                             </li>
//                         </Link>
//                         <Link href="/search">
//                             <li className="py-4 text-sm ">
//                            Search
//                             </li>
//                         </Link>

//                         </ul>
//                     </div>
//                 </div>

//             </div>
//         </header>
//         );
// }

<header
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] "
          : "fixed w-full shadow-sm h-20 z-[100] "
      }
      style={{ backgroundColor: navBg }}
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        {/* <Link href={"/"} className="text-2xl">
          <Image src='/../public/assets/LogoStore1.png' alt="/" width='125' height='50'/>
        </Link> */}
        <Link href="/">
  <div className="text-2xl font-extrabold tracking-tighter font-mono">
    {/* <img src="\3.png" alt="/"  width={125} height={50}/> */} SoleKachi&trade;
  </div>
</Link>
        <div>
          <ul style={{ color: `${linkcolor}` }} className="hidden md:flex">
            <Link href="/browse">
              <li className="ml-10 text-md font-extrabold tracking-tighter font-mono hover:border-b">Browse</li>
            </Link>

            <Link href="/categories">
              <li className="ml-10 text-md font-extrabold tracking-tighter font-mono hover:border-b">Categories</li>
            </Link>

            {/* <Link href="/account">
              <li className="ml-10 text-sm hover:border-b">Account</li>
            </Link> */}

            <Link href="/cart">
              <li className="ml-10 text-sm hover:border-b">
              <div className="relative">
              <AiOutlineShoppingCart size={20} />
              {cartProducts.length > 0 && (
                <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-gray-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  {cartProducts.length}
                </div>
              )}
            </div>
              </li>
            </Link>

            {/* <Link href="/cart">
              <li className="ml-10 text-sm hover:border-b">
                Cart({cartProducts.length})
              </li>
            </Link> */}

            <Link href="/search">
              <li className="ml-10 text-sm hover:border-b">
                <AiOutlineSearch size={20} />
              </li>
            </Link>
          </ul>
          <div className="flex items-center">
         
            <div className="md:hidden mr-4">
              <Link href="/search">
                <AiOutlineSearch size={30} />
              </Link>
            </div>
            <div className="md:hidden mr-4">
        
        <div className="relative">
        <Link href="/cart">
          <div className="flex items-center">
            <div className="relative">
              <AiOutlineShoppingCart size={30} />
              {cartProducts.length > 0 && (
                <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-gray-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartProducts.length}
                </div>
              )}
            </div>
          </div>
        </Link>
 
      </div>
          </div>
            <div onClick={handleNavigation} className="md:hidden">
              <AiOutlineMenu size={30} />
            </div>
          </div>
        </div>
      </div>
      <div
        className={isOpen ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}
      >
        <div
          className={
            isOpen
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
            <div className="text-2xl font-extrabold tracking-tighter font-mono">
    {/* <img src="\3.png" alt="/"  width={125} height={50}/> */} SoleKachi&trade;
  </div>
              <div
                onClick={handleNavigation}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <MdOutlineKeyboardDoubleArrowLeft />
              </div>
            </div>
            <div className="border-b text-sm border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4 font-mono">
                Elevate Your Fashion, Sneakers in Passion
              </p>
            </div>
          </div>

          <div className="py-4 flex-col">
            <ul>
              <Link href="/browse">
                <li className="py-4 text-md font-extrabold tracking-tighter font-mono">Browse</li>
              </Link>
              <Link href="/categories">
                <li className="py-4 text-md font-extrabold tracking-tighter font-mono">Categories</li>
              </Link>
            
              <Link href="/cart">
                <li className="py-4 text-md font-extrabold tracking-tighter font-mono ">  <div className="relative flex items-center">
              <AiOutlineShoppingCart size={25} />
              <span className="ml-2">Cart</span>
              {cartProducts.length > 0 && (
                <div className="absolute top-0 left-3.5 -mt-2 -mr-2 bg-gray-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  {cartProducts.length}
                </div>
              )}
             
            </div>
            </li>
              </Link>
                       
                       {/* <Link href="/cart">
  <li className="py-4 text-md font-extrabold tracking-tighter font-mono flex items-center">
    <span className="">Cart</span>
    <div className="flex items-center ml-2">
      <AiOutlineShoppingCart size={25} />
      {cartProducts.length > 0 && (
        <div className="absolute left-30 ml-4 mb-6 bg-gray-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {cartProducts.length}
        </div>
      )}
    </div>
  </li>
</Link> */}
              <Link href="/search">
                <li className="py-4 text-md font-extrabold tracking-tighter font-mono flex items-center">
                    <AiOutlineSearch size={25} />
                    <span className="ml-2">Search</span>
                </li>
            </Link>

            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}