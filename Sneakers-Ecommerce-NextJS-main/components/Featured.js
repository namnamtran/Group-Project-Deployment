import Typewriter from 'typewriter-effect/dist/core';
import { useEffect } from'react';
import { FcAbout} from'react-icons/fc';
import { MdHistoryEdu, MdHistoryToggleOff} from'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Featured() {
    useEffect(() => {
        const typewriter = new Typewriter('#typewriter-container', {
          strings: ['WElCOME TO OUR OFFICIAL WEBSITE', 'Bienvenue sur notre site officiel'],
          autoStart: true,
          loop: true,
        });
      }, []);
    
    return (
        
        <div id='featured' className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                {/* <div id="typewriter-container"></div> */}
                <p className="uppercase text-md tracking-widest font-bold">
                    <span id="typewriter-container"></span>
                </p>
                <div>
                <img src="\SoleKachiTM2.png" alt="Sneakers" />
                </div>
                <p className='md:text-md text-md font-bold text-gray-500'>Elevate Your Fashion, Sneakers in Passion</p>
                {/* <h1 className="md:text-sm">(Preview)</h1> */}
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                   
                  
                        <Link href='/#about' className="flex items-center bg-black rounded-md font-medium my-6 py-3 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                        <MdHistoryToggleOff style={{ color: 'white', fontSize: '1.15rem', verticalAlign: 'middle' }} />
                        <span className="ml-2 text-white" style={{ fontSize: '1.15rem', verticalAlign: 'middle' }}>About Us</span>
                        </Link>
                 



                        <Link href={'/browse'}  className="flex items-center bg-white rounded-md font-medium my-6 py-3 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                        <AiOutlineShoppingCart style={{ fontSize: '1.15rem', verticalAlign: 'middle' }} />
                        <span className="ml-2"  style={{ fontSize: '1.15rem', verticalAlign: 'middle' }}>Shop Now</span>
                        </Link >
                   
                </div>  
                </div>
            </div>
        </div>
    )
}