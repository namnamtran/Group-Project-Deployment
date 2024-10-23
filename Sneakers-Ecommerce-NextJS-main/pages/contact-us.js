import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai';

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen items-center justify-center">
        <div className="max-w-[1240px] mx-auto p-4 mt-20">
          <div className="w-full max-w-3xl">
            <h1 className="text-4xl font-bold mb-8 text-center font-mono">
              Contact Us
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-gray-700 rounded-lg p-4">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <AiOutlineMail className="mr-2"/>Email
                </h2>
                <p className="font-mono text-lg">
                  Send us an email at{" "}
                  <a
                    href="mailto:solekachi@gmail.com"
                    className="text-blue-500 hover:underline"
                  >
                    solekachi@gmail.com
                  </a>
                </p>
              </div>
              <div className="border border-gray-700 rounded-lg p-4">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <AiOutlineInstagram className="mr-2" /> Instagram
                </h2>
                <p className="font-mono text-lg">
                  Message us on Instagram:{" "}
                  <a
                    href="https://www.instagram.com/solekachi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    @solekachi
                  </a>
                </p>
              </div>
            </div>
            <div className="mt-8 text-center font-mono ">
              <p className="text-lg">
                We will reply to your message as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
