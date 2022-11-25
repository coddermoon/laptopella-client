import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import brand1 from "../../../assets/image/brands/brand-1.png";
import brand2 from "../../../assets/image/brands/brand-2.png";
import brand3 from "../../../assets/image/brands/brand-3.png";
import brand4 from "../../../assets/image/brands/brand-4.png";
import "swiper/css/bundle";
const Brands = () => {
  const brandsPhoto = [
    { id: 1, logo: brand1 },
    { id: 2, logo: brand2 },
    { id: 3, logo: brand3 },
    { id: 4, logo: brand4 },
    { id: 5, logo: brand2 },
    { id: 6, logo: brand4 },
    { id: 7, logo: brand1 },
  ];

  return (
    <div div className="container mx-auto my-5">
      <div className="my-10">
        <h2 className="text-center text-4xl font-bold my-5">Our Brands</h2>
        <p className="w-2/3 mx-auto  mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          voluptatum laboriosam eum veritatis magnam eius exercitationem
          eligendi consequuntur nemo quidem!
        </p>
      </div>
      <Swiper
        slidesPerView={8}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="bg-[#fff]">
          <img className="" src={brand1} alt="" />
        </SwiperSlide>

        {brandsPhoto.map((photo) => (
          <SwiperSlide key={photo.id} className="bg-[#fff]">
            <img src={photo.logo} alt="hello" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
