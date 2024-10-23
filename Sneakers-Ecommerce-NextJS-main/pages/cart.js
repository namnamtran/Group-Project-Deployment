// import { CartContext } from "@/components/CartContext";
// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// import axios from "axios";
// import { useContext, useEffect, useState } from "react";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
// import { BsTrash } from'react-icons/bs'
// import Link from "next/link";

// export default function CartPage() {
//     const {cartProducts, removeProduct, clearCart} = useContext(CartContext);
//     const [products, setProducts] = useState([]);
//     useEffect(() => {
//         if(cartProducts.length > 0){
//             axios.post('/api/cart',{ids:cartProducts})
//             .then(response =>{
//                 setProducts(response.data);
//             });
//         }
//     }, [cartProducts]);

// let total = 0;
// let containsSpecialPrice = false;

// for (const productId of cartProducts) {
//   const product = products.find((p) => p._id === productId);
//   if (product) {
//     const price = product.price;
//     if (price === "Please send offer" || price.startsWith("From $")) {
//       containsSpecialPrice = true;
//     } else {
//       const numericalPrice = parseFloat(price.replace("$", ""));
//       if (!isNaN(numericalPrice)) {
//         total += numericalPrice;
//       }
//     }
//   }
// }

// const handleRemoveProduct = (productId) => {
//     removeProduct(productId);
//   };

//   const handleClearCart = () => {
//     clearCart();
//     setProducts([]); // Clear the products array to reflect an empty cart
//   };
  
//   useEffect(() => {
//     // Check if the cart is empty after removing the product
//     if (cartProducts.length === 0) {
//       setProducts([]); // Clear the products array to reflect an empty cart
//     }
//   }, [cartProducts]);


//   return (
//     <>
//       <Header />
//       <div className="flex min-h-screen">
//         <div className="max-w-[1240px] mx-auto p-4 mt-20">
//           <div className="w-full max-w-5xl items-center justify-between font-mono text-sm">
//             {products.length > 0 ? (
//               <>
//                 <div className="text-4xl p-4 text-center">Your cart</div>

//                 <TransitionGroup className="grid grid-cols-1 gap-4">
//                   {products.map((product) => {
//                     const price = product.price;
//                     let displayPrice = "";
//                     if (price === "Please send offer") {
//                       displayPrice = "Please send your offer";
//                     } else if (price.startsWith("From $")) {
//                       displayPrice = `${price}`;
//                     } else {
//                       const numericalPrice = parseFloat(price.replace("$", ""));
//                       if (!isNaN(numericalPrice)) {
//                         displayPrice = `$${numericalPrice}`;
//                       }
//                     }

//                     return (
//                       <CSSTransition key={product._id} classNames="fade" timeout={300}>
//                         <div className="flex items-center justify-between border border-black p-4">
//                           <div className="flex items-center space-x-4">
//                           <Link href={`/product/${product._id}`}>
//                           <div>
                            
//                             <img
//                               src={product.images[0]}
//                               alt=""
//                               className="w-24 h-24 object-contain"
//                             />
//                             </div>
//                             </Link>
//                             <Link href={`/product/${product._id}`}>
//                             <div>
//                               <div className="font-medium">{product.title}</div>
//                               <div className="text-sm text-gray-500">
//                                 {product.size}
//                               </div>
//                               <div className="font-medium">{displayPrice}</div>
//                             </div>
//                             </Link>
//                           </div>
//                           <button
//                             className="flex items-center justify-center ml-5 bg-black border border-black text-white rounded-md font-medium py-2 px-4 shadow-lg cursor-pointer hover:bg-white hover:text-black transition-all duration-300"
//                             onClick={() => handleRemoveProduct(product._id)}
//                           >
//                             <BsTrash style={{ fontSize: '1rem', verticalAlign: 'middle',marginRight: '0.5rem' }} />
//                             Remove
//                           </button>
//                         </div>
//                       </CSSTransition>
//                     );
//                   })}
//                 </TransitionGroup>

//                 <div className="mt-8 text-right">
//                   {containsSpecialPrice ? (
//                     <>
//                       <div className="text-lg font-medium">
//                         Total Price:
//                       </div>
//                       <div className="text-xl font-bold">Please contact us</div>
//                     </>
//                   ) : (
//                     <>
//                       <div className="text-lg font-medium">Total Price:</div>
//                       <div className="text-xl font-bold">${total} CAD</div>
//                     </>
//                   )}
//                   <div className="text-sm text-gray-500">
//                     * Shipping costs may apply
//                   </div>
//                 </div>
//               </>
//             ) : (
//               <div className="text-lg p-4 text-center">
//                 Your cart is currently empty.
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }
import { CartContext } from "@/components/CartContext";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { BsTrash } from "react-icons/bs";
import Link from "next/link";
import { AiOutlineShareAlt } from "react-icons/ai";

export default function CartPage() {
  const { cartProducts, removeProduct, clearCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post('/api/cart', { ids: cartProducts })
        .then(response => {
          setProducts(response.data);
        });
    }
  }, [cartProducts]);

  let total = 0;
  let containsSpecialPrice = false;

  for (const productId of cartProducts) {
    const product = products.find((p) => p._id === productId);
    if (product) {
      const price = product.price;
      if (price === "Please send offer" || price.startsWith("From $") || price === "Sold Out") {
        containsSpecialPrice = true;
      } else {
        const numericalPrice = parseFloat(price.replace("$", ""));
        if (!isNaN(numericalPrice)) {
          total += numericalPrice;
        }
      }
    }
  }

  const handleRemoveProduct = (productId) => {
    removeProduct(productId);
  };

  useEffect(() => {
    // Check if the cart is empty after removing the product
    if (cartProducts.length === 0) {
      setProducts([]); // Clear the products array to reflect an empty cart
    }
  }, [cartProducts]);

  const handleCheckout = () => {

    window.location.href = 'https://www.instagram.com/solekachi/';
    
  };
  

  return (
    <>
      <Header />
      <div className="flex min-h-screen">
        <div className="max-w-[1240px] mx-auto p-4 mt-20">
          <div className="w-full max-w-5xl items-center justify-between font-mono text-sm">
            {products.length > 0 ? (
              <>
                <div className="text-4xl p-4 text-center">Your cart</div>

                <TransitionGroup className="grid grid-cols-1 gap-4">
                  {products.map((product) => {
                    const price = product.price;
                    let displayPrice = "";
                    if (price === "Please send offer") {
                      displayPrice = "Please send your offer";
                    } else if (price.startsWith("From $")) {
                      displayPrice = `${price}`;
                    }else if (price === "Sold Out") {
                      displayPrice = `Sold Out`;
                    }  
                    else {
                      const numericalPrice = parseFloat(price.replace("$", ""));
                      if (!isNaN(numericalPrice)) {
                        displayPrice = `$${numericalPrice}`;
                      }
                    }

                    return (
                      <CSSTransition key={product._id} classNames="fade" timeout={300}>
                        <div key={product._id} className="flex items-center justify-between border border-black p-4">
                          <div className="flex items-center space-x-4">
                            <Link href={`/product/${product._id}`}>
                              <div>
                                <img
                                  src={product.images[0]}
                                  alt=""
                                  className="w-24 h-24 object-contain"
                                />
                              </div>
                            </Link>
                            <Link href={`/product/${product._id}`}>
                              <div>
                                <div className="font-medium">{product.title}</div>
                                <div className="text-sm text-gray-500">
                                  {product.size}
                                </div>
                                <div className="font-medium">{displayPrice}</div>
                              </div>
                            </Link>
                          </div>
                          <button
                            className="flex items-center justify-center ml-5 bg-black border border-black text-white rounded-md font-medium py-2 px-4 shadow-lg cursor-pointer hover:bg-white hover:text-black transition-all duration-300"
                            onClick={() => handleRemoveProduct(product._id)}
                          >
                            <BsTrash style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '0.5rem' }} />
                            Remove
                          </button>
                        </div>
                      </CSSTransition>
                    );
                  })}
                </TransitionGroup>

                <div className="mt-8 text-right">
                  {containsSpecialPrice ? (
                    <>
                      <div className="text-lg font-medium">
                        Total Price:
                      </div>
                      <div className="text-xl font-bold">Please contact us</div>
                    </>
                  ) : (
                    <>
                      <div className="text-lg font-medium">Total Price:</div>
                      <div className="text-xl font-bold">${total} CAD</div>
                    </>
                  )}
                  <div className="text-sm text-gray-500">
                    * Shipping costs may apply
                  </div>

                  <div className="flex justify-end">
                    <button
                      className="flex items-center text-md font-extrabold tracking-tighter font-mono text-white bg-gray-600 rounded-md my-5 py-3 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 "
                      onClick={handleCheckout}
                    >
                      <AiOutlineShareAlt
                        style={{
                          fontSize: "1rem",
                          verticalAlign: "middle",
                          marginRight: "0.5rem",
                        }}
                      />
                      Contact
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-lg p-4 text-center">
                Your cart is currently empty.
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
