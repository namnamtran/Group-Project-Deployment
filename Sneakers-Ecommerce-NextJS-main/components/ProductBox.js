
import PrimaryButton from './PrimaryButton';
import Link from 'next/link';
import { useContext } from'react';
import { CartContext } from './CartContext';

export default function ProductBox({_id,title,price, size,images, sku}) {
    const {addProduct} = useContext(CartContext);
    const uri = '/product/' + _id;
    return (

 
        <div className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-5 relative flex flex-col items-center   ">
            <Link href={uri}>
    
                <img src={images[0]} className="w-full h-60 object-contain hover:scale-105 ease-in duration-300"  alt=""/>
                <div className='text-center max-w-[360px] overflow-hidden whitespace-nowrap overflow-ellipsis'>{title}</div>
                <div className="hidden group-hover:block absolute inset-0 flex items-center justify-center">
                    <h1 className="font-bold text-center" >
                         {Array.isArray(size) &&
                        size.map((item, index) => (
                        <span key={index}>
                            {item}
                            <br />
                        </span>
                        ))}
                    </h1>
                </div>
                <h1 className="font-bold text-center">{price}</h1>
                </Link>
            </div>
            {/* <PrimaryButton _id={sku} onClick={()=> addProduct(_id)} className='justify-center items-center text-center mt-4 my-4 '  >Select</PrimaryButton> */}
            <div onClick={()=> addProduct(_id)}>
                <PrimaryButton _id={_id} className="justify-center items-center text-center mt-4 my-4">
                    Select
                </PrimaryButton>
            </div>
           
        </div>
      
      
        )
}

            {/* <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 p-4 group hover:bg-gradient-to-r from-white to-[black/30]">
                  
                                <div className="flex flex-col items-center justify-center h-full w-full">{title}</div>
                   
                </div> */}