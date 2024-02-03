"use client";

// swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

// swiper style
import "swiper/css";

// next image
import Image from "next/image";

// icons
import { FaStar } from "react-icons/fa";

// framer
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../../variants";

// motor date
const motors = [
  {
    type: "Matic",
    name: "Yamaha NMAX",
    price: 100,
    stars: 3.5,
    image: "/assets/images/carSlider/nmax.png",
  },
  {
    type: "Cub/Skutik",
    name: "Honda Scoopy",
    price: 80,
    stars: 4.5,
    image: "/assets/images/carSlider/scoopy.png",
  },
  {
    type: "Sport",
    name: "Kawasaki Ninja",
    price: 130,
    stars: 3.5,
    image: "/assets/images/carSlider/kawasaki.png",
  },
  {
    type: "Trail",
    name: "KTM EXC series",
    price: 130,
    stars: 3.5,
    image: "/assets/images/carSlider/ktm.png",
  },
  {
    type: "Klasik",
    name: "Yamaha SR series",
    price: 130,
    stars: 3.5,
    image: "/assets/images/carSlider/srseries.png",
  },
  {
    type: "Scoopy",
    name: "Scoopy",
    price: 80,
    stars: 3.5,
    image: "/assets/images/carSlider/scoopy2.png",
  },
];

//looping bintang
const Rating = ({ rate }) => {
  return (
    <>
      {[...Array(rate)].map((_, i) => (
        <FaStar key={i} color="#f48d18" />
      ))}
    </>
  );
};

const MotorSlider = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.4 }}
      className="container mx-auto   "
    >
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 30 },
          1260: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {motors.map((motor, i) => {
          return (
            <SwiperSlide key={i}>
              <div className=" bg-gray-100 xl:w-full w-[350px] h-[430px] flex items-center justify-center flex-col mx-auto shadow-md">
                <div className="w-[250px] h-[250px] flex items-center justify-center">
                  <Image src={motor.image} alt="" width={300} height={200} />
                </div>

                {/* tipe */}
                <div className="absolute -mt-[370px] xl:-ml-[290px]  -ml-[260px] ">
                  <h3 className="text-gray-500 font-semibold">{motor.type}</h3>
                </div>
                {/* rating */}
                <div className="flex mb-2">
                  <Rating rate={5} />
                </div>

                <div className="flex items-center justify-center text-center pb-3">
                  <div>
                    <h3 className="h3">{motor.name}</h3>
                    <h3 className="text-[18px] font-semibold">
                      {motor.price}K/hari
                    </h3>
                  </div>
                </div>

                {/* btn */}
                <button className="btn p-2 w-[100px] bg-gray-400 hover:bg-gray-300 ">
                  Detail
                </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};

export default MotorSlider;
