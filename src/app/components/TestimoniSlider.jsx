"use client";

import Image from "next/image";

// swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

// swiper style
import "swiper/css";
import "swiper/css/pagination";

//import required module
import { Pagination } from "swiper/modules";

// icons
import { FaQuoteLeft } from "react-icons/fa";

// framer
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../../variants";

// testi data
import testiData from "../../../public/assets/testiData";

const TestimoniSlider = () => {
  return (
    <div className="flex h-screen items-center pe-3 ps-3">
      <Swiper
        modules={[Pagination]}
        breakpoints={{
          320: {
            pagination: { clickable: true, dynamicBullets: true },
            slidesPerView: 1,
            spaceBetween: 25,
          },
        }}
      >
        {testiData.map((testi, i) => {
          return (
            <SwiperSlide key={i} style={{ width: "400px" }}>
              <div className="flex flex-col items-center justify-center gap-y-1 ">
                <FaQuoteLeft className="text-accent text-[35px]" />
                <p className="font-bold text-center mt-4 mb-4 text-[18px]">
                  {testi.message}
                </p>

                <Image src={testi.avatar} alt=" " width={70} height={70} />
                <p className="text-black text-[17px] font-semibold ">
                  {testi.name}
                </p>
                <p>{testi.job}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TestimoniSlider;
