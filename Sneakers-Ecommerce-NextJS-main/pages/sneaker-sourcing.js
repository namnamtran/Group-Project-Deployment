import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Link } from "react-scroll";

export default function SneakerSourcingPage() {
    return (
      <>
        <Header />
        <div className="flex min-h-screen items-center justify-center">
        <div className="max-w-[1240px] mx-auto p-4 mt-20">
          <div className="w-full max-w-3xl font-mono">
              <h1 className="text-4xl font-bold mb-8 text-center">Sneaker Sourcing</h1>
              <div className="border border-black p-6">
                <div className="text-wild">
                  At <span className="font-bold">SoleKachi</span>, we offer comprehensive sneaker sourcing services to help you find the sneakers you desire.
                </div>
               
                <div className="mt-6">
             
                  <p className="text-base">
                     In order to find the sneakers you are seeking for, we collaborate with sellers, retailers, and collectors. We take pleasure in providing our consumers with high-quality, sneakers.
                  </p>
                </div>
                <div className="mt-6">
                  <p className="text-base">
                  <span className="font-bold">Need help finding a specific sneaker? </span>Contact our sourcing team for personalized assistance. They will work closely with you to understand your needs and help you find the perfect pair.
                  </p>
                </div>
                <div className="mt-6">
                  <p className="text-base">
                  Level up your sneaker collection with our sourcing service. Elevate your fashion, fueled by passion.
                  </p>
                </div>
                <div className="mt-8 flex justify-center">
                  {/* <Link to="contact" smooth={true} duration={500}>
                    <button className="font-bold">Contact Us</button>
                  </Link> */}
                  {" "}
    <a
      href="https://www.instagram.com/solekachi"
      target="_blank"
      rel="noopener noreferrer"
      className="font-bold"
    >
      Contact us
    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }