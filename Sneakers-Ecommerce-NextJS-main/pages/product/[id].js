import Header from "@/components/Header";

import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { Carousel } from "react-responsive-carousel";
import { useState, useEffect  } from "react";
import { useContext } from "react";
import { GiCheckMark } from'react-icons/gi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import ClearIcon from '@mui/icons-material/Clear';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CartContext } from "@/components/CartContext";
import { AiOutlineShoppingCart, AiOutlineShareAlt } from'react-icons/ai';
import { InstagramShareButton } from 'react-share';
import Footer from "@/components/Footer";


export default function ProductPage({product}) {
    const [selectedImage, setSelectedImage] = useState(product.images[0]);
    const [showIcon, setShowIcon] = useState(false);
    const {addProduct} = useContext(CartContext);
    


    // const handleShareToInstagram = () => {
    //     // Logic to share the item to Instagram
    //     const itemUrl = `https://example.com/product/${product.id}`; // Replace with the actual item URL
    //     const instagramUrl = `https://www.instagram.com/trannguyenquocnam/`; // Replace with your Instagram link
    //     const caption = `Check out this item: ${itemUrl}`; // Modify the caption as needed
        
    //     // Open the Instagram link with the caption
    //     const instagramShareUrl = `${instagramUrl}?caption=${encodeURIComponent(caption)}`;
    //     window.open(instagramShareUrl, "_blank");
    //   };

    const handleShareToInstagram = () => {
      const itemUrl = `https://example.com/product/${product.id}`; // Replace with the actual item URL
      const instagramUsername = 'solekachi'; // Replace with the Instagram username you want to message
    
      // Encode the message
      const message = `Check out this item: ${itemUrl}`; // Modify the message as needed
      const encodedMessage = encodeURIComponent(message);
    
      // Open the Instagram DM page with the pre-filled message
      const instagramDmUrl = `https://www.instagram.com/solekachi/?message=${encodedMessage}`;
      window.open(instagramDmUrl, "Hello");
    };
    

    const handleImageClick = (image) => {
      setSelectedImage(image);
    };
  
    return (
      <>
        <Header />
        <div className="flex min-h-screen font-mono">
          <div className="max-w-[1240px] mx-auto p-4 mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-black p-4">
                <Carousel
                  selectedItem={product.images.indexOf(selectedImage)}
                  showThumbs={false}
                  infiniteLoop={true}
                  className="border-bottom border-black"
                >
                  {product.images.map((image, index) => (
                    <div key={index}>
                      <img
                        src={image}
                        alt=""
                        className="w-full h-auto border border-black"
                      />
                    </div>
                  ))}
                </Carousel>
                <div className="flex flex-wrap justify-center border-black mt-4">
                  {product.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt=""
                      className={`w-12 h-12 sm:w-16 sm:h-16 object-cover border border-black m-1 cursor-pointer ${
                        selectedImage === image ? "border-gray-200" : ""
                      }`}
                      onClick={() => handleImageClick(image)}
                    />
                  ))}
                </div>
              </div>
              
              <div className="border border-black p-4">
                <div className="text-black text-sm">
                  <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
                   <div className="text-gray-500 mb-4 flex flex-wrap  border-black mt-4">
                    {product.size.map((size, index) => (
                        <div key={index} className="flex items-center mr-2">
                        {size}
                        <div className="ml-2 mb-1">
        {product.price === 'Sold Out' ? (
          <ClearIcon
          style={{
            fontSize: '1.25rem',
            verticalAlign: 'middle',
            marginRight: '0.5rem',
            transition: 'transform 0.3s ease',
            cursor: 'pointer',
            color:'black'
          }}
          className="hover:scale-125 hover:text-red-500"
          />
        ) : (<GiCheckMark
          style={{
            fontSize: '1rem',
            verticalAlign: 'middle',
            marginRight: '0.5rem',
            transition: 'transform 0.3s ease',
            cursor: 'pointer',
            color:'black'
          }}
          className="hover:scale-125 hover:text-green-500"
        />)}
      </div>
                        </div>
                    ))}
                  </div>
                  <div className="text-gray-500 mb-4">{product.description}</div>
                  <div className="text-gray-500 mb-4">SKU:{product.sku}</div>
                  <div className="text-gray-500 mb-4">Condition: {product.condition}</div>
                  <div className="text-xl font-bold">{product.price}</div>
                  <div className="flex flex-wrap justify-center mt-4">
                  <div className="flex justify-center mt-6 mr-4">
                          <button
                            className="flex items-center text-white bg-black rounded-md font-medium my-6 py-3 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 "
                            onClick={() => addProduct(product._id)}
                          >

{/* bg-white rounded-md font-medium my-6 py-3 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 */}

                             {/* bg-black border border-black  text-white rounded-md font-medium py-2 px-4 shadow-lg cursor-pointer hover:bg-white hover:text-black transition-all duration-300 */}
                          {/* bg-black rounded-md font-medium my-6 py-3 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 */}
                            <AiOutlineShoppingCart style={{ fontSize: '1rem', verticalAlign: 'middle',marginRight: '0.5rem' }} />
                            Select
                          </button>
                        </div>

                        {/* <div className="flex justify-center mt-6 ">
                          <button
                            className="flex items-center bg-gray-200 border border-gray-200  text-black rounded-md font-medium py-2 px-4 shadow-lg cursor-pointer hover:bg-black hover:text-white transition-all duration-300 "
                            onClick={() => handleSelectProduct(product._id)}
                          >
                          
                            <AiOutlineShareAlt style={{ fontSize: '1rem', verticalAlign: 'middle',marginRight: '0.5rem' }} />
                            Contact
                          </button>
                        </div> */}
                        <div className="flex justify-center mt-6 ">
                    <button
                      className="flex items-center bg-white rounded-md font-medium my-6 py-3 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 "
                      onClick={handleShareToInstagram}
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
                  {/* <button
                    className="bg-gray-200 text-black py-2 px-4 rounded-md"
                    onClick={handleShareToInstagram}
                  >
                    Contact
                  </button> */}
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </>
    );
  }
  
  
export async function getServerSideProps(context) { 
    await mongooseConnect();
    const {id} = context.query;
    const product = await Product.findById(id);
    return {
        props: {
            product : JSON.parse(JSON.stringify(product)),
        }
    };
};