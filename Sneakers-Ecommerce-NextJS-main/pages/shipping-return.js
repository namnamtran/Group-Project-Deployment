import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FiMail } from "react-icons/fi";

export default function ShippingAndReturnPage() {
    return (
      <>
        <Header />
        <div className="flex min-h-screen items-center justify-center">
          <div className="max-w-[1240px] mx-auto p-4 mt-20">
            <div className="w-full max-w-6xl">
              <h1 className="text-2xl font-bold mb-8 text-center font-mono">
                Shipping & Return Policy
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-gray-700 rounded-lg p-4">
                  <h2 className="text-xl font-bold mb-4">Shipping Policy</h2>
                  <div className="font-mono text-lg leading-relaxed">
                    {/* <div>Orders take <span className="font-bold">1-2 days</span> to process once placed.</div> */}
                    <div>Orders take <span className="font-bold">1-2 days</span> to process once placed.</div>
                    <br />
                    <div>Customers can expect to receive their packages within <span className="font-bold">1-10 business days.</span></div>
                    <br />
                    <div>International customers can expect to receive their purchase within <span className="font-bold">10-20 business days.</span></div>
                    <br />
                    <div><span className="font-bold">SoleKachi</span> will NOT be liable for any lost, stolen, or damaged shipments.</div>
                    <br />
                    <div>All shipments come with <span className="font-bold">a tracking number.</span></div>
                    <br />
                    For inquiries, feel free to contact us at{" "}
                    <a
                      href="mailto:solekachi@gmail.com"
                      className="text-blue-500 hover:underline"
                    >
                      solekachi@gmail.com
                    </a>  or <a
                    href="https://www.instagram.com/solekachi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    @solekachi
                  </a> 
                  </div>
                </div>
                <div className="border border-gray-700 rounded-lg p-4">
                  <h2 className="text-xl font-bold mb-4">Return Policy</h2>
                  <div className="font-mono text-lg leading-relaxed">
                    <div>All purchases from <span className="font-bold">SoleKachi</span> are final sale due to the limited nature of our products.</div>
                    <br />
                    We do not offer <span className="font-bold">refunds or exchanges.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }