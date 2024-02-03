"use client";
import Image from "next/image";

// react count up
import CountUp from "react-countup";

// react intersection observer
import { useInView } from "react-intersection-observer";

// motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../../variants";

import { MdHandshake, MdKey, MdTrendingUp } from "react-icons/md";

const Why = () => {
  return (
    <section
      className="section  bg-[#f7f8f9] flex items-center justify-center  "
      id="why"
    >
      <div className="container flex flex-col items-center justify-center  ">
        {/* image */}
        <motion.h3
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="h3 text-[32px] leading-10 font-extrabold capitalize text-center"
        >
          Mengapa memilih layanan rental motor kami?
        </motion.h3>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="hidden md:flex"
        >
          <Image
            src={"/assets/images/why/why.png"}
            width={700}
            height={700}
            alt=""
          />
        </motion.div>
        {/* text */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className=" rounded-[20px]  text-black xl:text-[18px] text-base xl:text-center text-justify xl:ps-24 xl:pe-24 ps-2 pe-2 mt-2"
        >
          <p>
            Karena kami menawarkan lebih dari sekadar kendaraan, kami memberikan
            pengalaman perjalanan yang membebaskan, efisien, dan menghadirkan
            kenyamanan tanpa repot. Dengan beragam pilihan motor berkualitas
            tinggi, biaya terjangkau, dan layanan pelanggan yang responsif,
            setiap pelanggan kami mendapatkan kendaraan yang sesuai dengan gaya
            perjalanan mereka.
          </p>
        </motion.div>

        {/* icon */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="flex gap-5 pt-4"
        >
          <div className="grid grid-cols-3 gap-4 pe-6 ps-6 text-center ">
            <div className="flex flex-col items-center justify-center  ">
              <MdKey className="text-3xl text-accent" />
              <p className="text-black font-bold uppercase">Akses mudah</p>
              <p className="text-black font-bold uppercase">dan cepat</p>
              <p className="hidden xl:flex font-base ">
                Dengan fokus utama pada kenyamanan dan efisiensi, layanan kami
                dirancang untuk memberikan akses mudah dan cepat kepada setiap
                pelanggan.{" "}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <MdHandshake className="text-3xl text-accent" />
              <p className="text-black  font-bold uppercase">Fleksibel</p>
              <p className="text-black  font-bold uppercase">Servis</p>
              <p className="hidden xl:flex">
                memberikan pengalaman servis yang sepenuhnya fleksibel,
                disesuaikan dengan kebutuhan unik setiap pelanggan kami
              </p>
            </div>
            <div className="flex flex-col items-center justify-center  ">
              <MdTrendingUp className="text-3xl text-accent" />
              <p className="text-black font-semibold uppercase">Perawatan</p>
              <p className="text-black font-semibold uppercase"> baik</p>
              <p className="hidden xl:flex">
                Perawatan yang baik menjadi inti dari layanan kami untuk
                memberikan pengalaman berkendara yang aman, nyaman, dan tanpa
                kendala.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Why;
