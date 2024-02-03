"use client";

// image
import Image from "next/image";

//motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../../variants";

const Brands = () => {
  return (
    <section className="xl:pt-16 xl:h-[200px] xl:ps-28 xl:pe-28  ps-2 pe-2 flex flex-col justify-center mx-auto">
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.4 }}
        className="container  bg-white mx-auto items-center"
      >
        {/* brands wrapper */}
        <div className="grid xl:flex item-center justify-center grid-cols-3 xl:gap-x-20 gap-x-2">
          <div className=" my-auto mx-auto">
            <Image
              src={"/assets/icons/brands/hondalogo.png"}
              width={80}
              height={31}
              alt=""
            />
          </div>
          <div className=" my-auto mx-auto">
            <Image
              src={"/assets/icons/brands/yamahalogo.png"}
              width={80}
              height={31}
              alt=""
            />
          </div>
          <div className=" my-auto mx-auto">
            <Image
              src={"/assets/icons/brands/ktmlogo.png"}
              width={80}
              height={31}
              alt=""
            />
          </div>
          <div className=" my-auto mx-auto">
            <Image
              src={"/assets/icons/brands/suzukilogo.png"}
              width={80}
              height={31}
              alt=""
            />
          </div>
          <div className=" my-auto mx-auto">
            <Image
              src={"/assets/icons/brands/scoopylogo.png"}
              width={80}
              height={31}
              alt=""
            />
          </div>
          <div className=" my-auto mx-auto">
            <Image
              src={"/assets/icons/brands/kawasakilogo.png"}
              width={80}
              height={31}
              alt=""
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Brands;
