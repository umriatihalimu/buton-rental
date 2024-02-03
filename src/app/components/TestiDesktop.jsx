"use client";

import Image from "next/image";

// swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

// swiper style
import "swiper/css";

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

const TestiDesktop = () => {
  return (
    <div className="">
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.4 }}
        className="xl:grid xl:grid-cols-4 flex flex-col gap-16 xl:pt-24 pt-0"
      >
        {testiData.map((testi, i) => {
          return (
            <div
              key={i}
              className="bg-transparent w-[300px] p-4 shadow-md rounded-[20px] "
            >
              <div className="flex gap-3 items-center">
                <Image src={testi.avatar} width={50} height={50} alt="" />
                <div className="flex flex-col">
                  <p className="text-primary font-semibold text-[18px]">
                    {testi.name}
                  </p>
                  <p>{testi.job}</p>
                </div>
              </div>
              <div className=" text-[18px] mx-2 mt-2">{testi.message}</div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default TestiDesktop;
