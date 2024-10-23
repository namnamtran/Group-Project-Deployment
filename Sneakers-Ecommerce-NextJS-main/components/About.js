import React, { useEffect } from 'react';
export default function About() {
    useEffect(() => {
        const handleScrollToAbout = () => {
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth',  block: 'start', inline: 'nearest', duration: 2000 });
          }
        };
    
        const aboutLink = document.getElementById('about-link');
        if (aboutLink) {
          aboutLink.addEventListener('click', handleScrollToAbout);
        }
    
        return () => {
          if (aboutLink) {
            aboutLink.removeEventListener('click', handleScrollToAbout);
          }
        };
      }, []);
    return (
        <div id="about" className="w-full md:h-screen p-2 flex items-center py-16 ">
            <div className="max-w-[1240px] m-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-black text-xl font-extrabold tracking-tighter">About Us</p>
                    <p className="py-4 text-gray-500 text-lg font-mono font-extrabold">What we are</p>
                    <p className="py-2 font-mono tracking-tighter">We offer an extensive collection of items with a focus on authenticity. Our commitment to quality and integrity ensures that you can trust every purchase from our platform.</p>
                    <p className="py-2 font-mono tracking-tighter">Experience authenticity and transparency with us. Our platform offers immersive insights, ensuring you make informed purchases. Trust our reliable and trustworthy service, catered to discerning customers like you.</p>
                    <p className="py-2 font-mono text-black tracking-tighter font-semibold">
                    <a href="https://www.instagram.com/p/CvEXrkOgeFy/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" className="underline cursor-pointer">
                      Check out our references and review from our customers.
                    </a>
                  </p>
                </div>
                <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <img className="rounded-xl" src='\solekachi_qr.png' width={350} height={400} alt="about" />
                </div>
            </div>
        </div>
    )
}