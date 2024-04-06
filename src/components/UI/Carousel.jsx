import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
// import { ImageCarousel } from "../../data/Image";

// Import Swiper styles
import "swiper/css";

export default function Carousel({className}) {
  return (
    <Swiper
      loop={true}
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      spaceBetween={50}
      slidesPerView={1}
     
      className={className}
    >
      {ImageCarousel.map(({ id, img }) => (
        <SwiperSlide  key={id}>
          <div style={{backgroundImage: `url(${img})`}} className={"h-96 relative w-full bg-cover  bg-center"} >
            <h1 className="text-5xl font-bold text-fourth ml-2">
              OUR PRODUCT
            </h1>
            <h1 className="text-5xl font-bold text-fourth absolute right-0 bottom-4 ">
              <span className="text-primary">WHAT</span> ARE YOU <span className="text-primary">WAITING FOR?</span>
            </h1>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
