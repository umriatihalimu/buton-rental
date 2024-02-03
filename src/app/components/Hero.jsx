"use client";
import React, { useContext } from "react";
import Search from "./Search";
import Image from "next/image";

import { SearchContext } from "../context/search";

// framer motion
import { motion, easeInOut } from "framer-motion";

// variants
import { fadeIn } from "../../../variants";

const Hero = () => {
  const { searchActive } = useContext(SearchContext);
  return (
    <section className="h-full xl:h-[90vh] bg-[#b2b7c2]/10 " id="home">
      <div className="container mx-auto h-full xl:pt-5 ">
        {/* text & img wrapper */}
        <div className="xl:grid xl:grid-cols-2 flex flex-col items-center justify-center h-full xl:ms-11 ms-0 xl:pt-0 pt-5">
          {/* text */}
          <div className="xl:text-start text-center ps-4 pe-4 ">
            <motion.h1
              variants={fadeIn("left", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="h1"
            >
              Rasakan
              <span className="text-accent"> kebebasan berkendara </span>
              <br />
              bersama kami!
            </motion.h1>
            <motion.p
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="text-[18px] "
            >
              Jelajahi Pulau Buton dengan kenyamanan dan kepraktisan menggunakan
              motor pilihan Anda. Dengan tarif yang terjangkau dan armada motor
              yang terawat dengan baik, kami hadir untuk membuat perjalanan Anda
              lebih menyenangkan.
            </motion.p>

            {/* btns */}
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="-mt-5"
            >
              <button className="mr-3">
                <Image
                  src={"/assets/icons/buttons/google-play.svg"}
                  width={160}
                  height={120}
                  alt=""
                />
              </button>
              <button>
                <Image
                  src={"/assets/icons/buttons/appstore.svg"}
                  width={160}
                  height={120}
                  alt=""
                />
              </button>
            </motion.div>
          </div>

          {/* img */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="pb-8"
          >
            <Image
              src={"/assets/images/hero/motor.png"}
              alt=""
              width={800}
              height={800}
              priority
            />
          </motion.div>
        </div>
      </div>

      {searchActive ? (
        <div className="fixed top-[71px] z-10 w-full max-w-[1920px]   ">
          <Search />
        </div>
      ) : (
        <div className="-mt-12 w-full max-w-[1170px] mx-auto">
          <Search />
        </div>
      )}
    </section>
  );
};

export default Hero;
