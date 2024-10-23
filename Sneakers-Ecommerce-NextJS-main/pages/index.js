// import Image from 'next/image'
// import { Inter } from 'next/font/google'

import Header from "@/components/Header";
import Head from "next/head";
import Featured from "@/components/Featured";
import About from "@/components/About";
import NewProducts from "@/components/NewProducts";
import Footer from "@/components/Footer";
import { mongooseConnect } from "@/lib/mongoose";
import {Product} from "@/models/Product";
import { StrictMode } from 'react';

// const inter = Inter({ subsets: ['latin'] })

export default function  HomePage({product, newProducts}) {
  // console.log(product);
  return(
    <StrictMode>
    <div>
      <Head>
        <title>SoleKachi | Elevate Your Fashion, Sneakers in Passion</title>
        <link rel="icon" href="IconWebsite.ico" type="image/x-icon" />
      </Head>
      <div>
        <Header/>
        <Featured/>
        <NewProducts products={newProducts}/>
        <About/>
        <Footer/>
      </div>
    </div>
    </StrictMode>
  );
}

export async function getServerSideProps() {
  try {
    const featuredProductId = '64853f1843759fb3603b5f1a';
    await mongooseConnect();
    const product = await Product.findById(featuredProductId);
    const newProducts = await Product.find({}, null, { sort: { '_id': -1 }, limit: 6 });

    return {
      props: {
        product: product ? JSON.parse(JSON.stringify(product)) : null,
        newProducts: newProducts ? JSON.parse(JSON.stringify(newProducts)) : null,
      },
    };
  } catch (error) {
    // Handle any errors that may occur during data fetching
    console.error("Error fetching data:", error);
    return {
      props: {
        product: null,
        newProducts: null,
      },
    };
  }
}
