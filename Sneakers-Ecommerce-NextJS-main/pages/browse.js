import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import Link from "next/link";
import { useContext, useState } from "react";
import { CartContext } from "@/components/CartContext";
import { animateScroll as scroll } from "react-scroll";
import { AiOutlineShoppingCart } from'react-icons/ai'
import Footer from "@/components/Footer";

export default function ProductsPage({products}) {
    const { addProduct } = useContext(CartContext);
    const [hoveredProductId, setHoveredProductId] = useState(null);
  
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
            <div className="w-full max-w-5xl items-center justify-between font-mono text-sm">
              <>
                <div className="text-3xl p-4 text-center">All Products</div>
                {products.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map((product) => (
                      <div
                        key={product._id}
                        className="border border-black p-4 flex flex-col relative"
                      >
                        <Link href={`/product/${product._id}`}>
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
                            <div
                              className="flex flex-col flex-grow relative"
                              onMouseEnter={() => handleProductHover(product._id)}
                              onMouseLeave={() => handleProductHover(null)}
                            >
                              <div className="font-bold mb-2 truncate">
                                {product.title}
                              </div>
  
                              <div className="font-medium">{product.price}</div>
                            </div>
                          </div>
                        </Link>
                        <div className="flex justify-center mt-6">
                          <button
                            className="flex items-center bg-black border border-black  text-white rounded-md font-medium py-2 px-4 shadow-lg cursor-pointer hover:bg-white hover:text-black transition-all duration-300"
                            onClick={() => handleSelectProduct(product._id)}
                          >
                          
                            <AiOutlineShoppingCart style={{ fontSize: '1rem', verticalAlign: 'middle',marginRight: '0.5rem' }} />
                            Select
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-lg p-4 text-center">
                    Page is currently working
                  </div>
                )}
              </>
            </div>
          </div>
        </div>
        <div
           className="fixed bottom-4 right-4 bg-gray-500 text-white p-3 rounded-full cursor-pointer transition-transform duration-300 transform hover:scale-110 "
           onClick={scrollToTop}
        >
          {/* Add your icon component here */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="18"
            height="18"
             
          >
            <path d="M12 20a1 1 0 01-1-1v-6.586l-4.293 4.293a1 1 0 11-1.414-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 11-1.414 1.414L13 12.414V19a1 1 0 01-1 1z" />
          </svg>
        </div>
        <Footer/>
      </>
    );
  }
    

export async function getServerSideProps() { 
    await mongooseConnect();
    const products = await Product.find({}, null,  {sort:{'_id':-1}});
    return {
        props:{
            products : JSON.parse(JSON.stringify(products)),
    }
}
}