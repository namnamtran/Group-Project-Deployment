
// import Header from "@/components/Header";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import {ImCancelCircle} from 'react-icons/Im'

// export default function SearchPage() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [phrase, setPhrase] = useState('');
//   const [products, setProducts] = useState('');
//   useEffect(() => {
//     if(phrase.length > 0){
//         axios.get('/api/products/search=' + encodeURIComponent(phrase))
//         .then(reponse => {
//             setProducts(reponse.data)
//         }

//         )
//     }
//   },[phrase])

//   return (
//     <>
//       <Header />
//       <div className="flex min-h-screen">
//         <div className="fixed top-0 left-0 w-full h-full bg-white z-50">
//           <div className="max-w-[1240px] mx-auto p-4 mt-20">
//             <div className="w-full max-w-5xl items-center justify-between font-mono text-sm">
//               <>
//                 <div className="relative">
//                   <input
//                     type="text"
//                     value={searchQuery}
//                     onChange={ev => setPhrase(ev.target.value)} 
//                     className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
//                     placeholder="Type to search"
//                   />
//                   {searchQuery && (
//                     <button
//                       className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
//                       onClick={() => setSearchQuery("")}
//                     >
//                       <ImCancelCircle />
//                     </button>
//                   )}
//                 </div>
//               </>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// import axios from "axios";
// import { useState, useEffect } from "react";
// import { ImCancelCircle } from 'react-icons/Im';


import Header from "@/components/Header";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { ImCancelCircle } from 'react-icons/im';
import { AiOutlineShoppingCart  } from 'react-icons/ai';
import { CartContext } from "@/components/CartContext";
import { Link } from "react-scroll";
import Footer from "@/components/Footer";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [phrase, setPhrase] = useState('');
  const [products, setProducts] = useState([]);
  const { addProduct } = useContext(CartContext);
  const [hoveredProductId, setHoveredProductId] = useState(null);

  useEffect(() => {
    if (phrase.length > 0) {
      axios.get(`/api/products?search=${encodeURIComponent(phrase)}`)
        .then(response => {
          setProducts(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      setProducts([]);
    }
  }, [phrase]);

  const handleSelectProduct = (productId) => {
    addProduct(productId);
  };
  const handleProductHover = (productId) => {
    setHoveredProductId(productId);
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500, // Adjust the duration as needed
      smooth: "easeInOutQuart", // Choose a smooth scrolling animation
    });
  };
  
 return (
  <>
    <Header />
    <div className="flex min-h-screen">
      <div className="max-w-[1240px] mx-auto p-4 mt-20">
        
        <div className="w-full max-w-7xl items-center justify-between font-mono text-sm">
          <>
            <div className="relative">
              <input 
                type="text"
                value={searchQuery}
                onChange={(ev) => {
                  setSearchQuery(ev.target.value);
                  setPhrase(ev.target.value);
                }}
                className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-black "
                placeholder="Type to search"
              />
              {searchQuery && (
                <button
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                  onClick={() => {
                    setSearchQuery("");
                    setPhrase("");
                  }}
                >
                  <ImCancelCircle />
                </button>
              )}
            </div>

            {products.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                {products.map((product) => (
                  <div
                    key={product._id}
                    className="border border-black p-4 flex flex-col relative"
        onMouseEnter={() => handleProductHover(product._id)}
        onMouseLeave={() => handleProductHover(null)}
                  >
                    <a href={`/product/${product._id}`}>
                      <div>
                        <img
                          src={product.images[0]}
                          alt=""
                          className="w-24 h-24 object-contain mb-4"
                        />
                        {hoveredProductId === product._id && (
                          <div className="absolute top-0 right-0 p-2 bg-transparent text-gray-700">
                            {product.size.map((item, index) => (
                              <span key={index}>
                                {item}
                                <br />
                              </span>
                            ))}
                          </div>
                        )}
                        <div className="flex flex-col flex-grow relative">
                          <div className="font-bold mb-2 truncate">
                            {product.title}
                          </div>
                          <div className="font-medium">{product.price}</div>
                        </div>
                      </div>
                    </a>
                    <div className="flex justify-center mt-6">
                      <button
                        className="flex items-center bg-black border border-black  text-white rounded-md font-medium py-2 px-4 shadow-lg cursor-pointer hover:bg-white hover:text-black transition-all duration-300"
                        onClick={() => handleSelectProduct(product._id)}
                      >
                        <AiOutlineShoppingCart
                          style={{
                            fontSize: "1rem",
                            verticalAlign: "middle",
                            marginRight: "0.5rem",
                          }}
                        />
                        Select
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-lg p-4 text-center ">
                Sorry, nothing found. Please{" "}
    <a
      href="https://www.instagram.com/solekachi"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:text-blue-700"
    >
      contact us
    </a>{" "}
    for more information.
  </div>
            )}
          </>
        </div>
      </div>
    </div>
    {/* <div className="fixed bottom-4 right-4 bg-gray-500 text-white p-3 rounded-full cursor-pointer transition-transform duration-300 transform hover:scale-110"
      onClick={scrollToTop}>
    
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="18"
        height="18"
      >
        <path d="M12 20a1 1 0 01-1-1v-6.586l-4.293 4.293a1 1 0 11-1.414-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 11-1.414 1.414L13 12.414V19a1 1 0 01-1 1z" />
      </svg>
    </div> */}
    <Footer/>
  </>
);
}

// import Header from "@/components/Header";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { ImCancelCircle } from 'react-icons/Im';

// export default function SearchPage() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [phrase, setPhrase] = useState('');
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     if (phrase.length > 0) {
//       axios.get(`/api/products?search=${encodeURIComponent(phrase)}`)
//         .then(response => {
//           setProducts(response.data);
//         })
//         .catch(error => {
//           console.error(error);
//         });
//     } else {
//       setProducts([]);
//     }
//   }, [phrase]);

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const clearSearch = () => {
//     setSearchQuery("");
//     setPhrase("");
//   };

//   return (
//     <>
//       <Header />
//       <div className="flex min-h-screen">
//         <div className="fixed top-0 left-0 w-full h-full bg-white z-50">
//           <div className="max-w-[1240px] mx-auto p-4 mt-20">
//             <div className="w-full max-w-5xl items-center justify-between font-mono text-sm">
//               <>
//                 <div className="relative">
//                   <input
//                     type="text"
//                     value={searchQuery}
//                     onChange={handleSearchChange}
//                     className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
//                     placeholder="Type to search"
//                   />
//                   {searchQuery && (
//                     <button
//                       className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
//                       onClick={clearSearch}
//                     >
//                       <ImCancelCircle />
//                     </button>
//                   )}
//                 </div>
//               </>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="max-w-[1240px] mx-auto p-4">
//         {products.length > 0 ? (
//           products.map((product) => (
//             <div key={product.id}>
//               {/* Render the search results */}
//               <h3>{product.title}</h3>
//               {/* Add more details of the product */}
//             </div>
//           ))
//         ) : (
//           <p>No results found</p>
//         )}
//       </div>
//     </>
//   );
// }
