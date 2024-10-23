import { Carousel } from "react-responsive-carousel";

export default function ProductDetailsCarousel() {
    return(
        <>
            <div className="text-white text-sm w-full max-w-[1360px] mx-auto sticky top[50px]">
                <Carousel
                    infiniteLoop={true}
                    showIndicators={false}
                    showStatus={false}
                    thumbWidth={60}
                    className="productCarousel"
                >

                </Carousel>
            </div>
        </>
    );
}