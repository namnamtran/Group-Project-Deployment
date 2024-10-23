// import ProductBox from '@/components/ProductBox'
// export default function NewProducts({products}) {
//     return (
//         <div className="w-full">
//             <div className="max-w-[1240px] mx-auto ">
//                 <h1 className="text-xl font-extrabold tracking-tighter">Featured products</h1>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 font-mono">
                  
//                     {products?.length > 0 && products.map((product) => (
//                           <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-300 p-4 group hover:bg-gradient-to-r ">
                         
//                                 <div key={product._id} className="flex flex-col items-center justify-center h-full w-full text-center"><ProductBox{...product}/></div>
//                            </div>
//                     ))}

                   

                    
//                 </div>
//             </div>
//         </div>
//     )
// }

import ProductBox from '@/components/ProductBox';

export default function NewProducts({ products }) {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto ">
        <h1 className="text-xl font-extrabold tracking-tighter">Featured products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 font-mono">
          {products?.length > 0 &&
            products.map((product) => (
              <div key={product._id} className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-300 p-4 group hover:bg-gradient-to-r ">
                <ProductBox {...product} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
