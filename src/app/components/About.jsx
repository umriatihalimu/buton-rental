"use client";
import Image from "next/image";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { MdOutlineBuildCircle } from "react-icons/md";
import { FaMotorcycle } from "react-icons/fa";

// react count up
import CountUp from "react-countup";

// react intersection observer
import { useInView } from "react-intersection-observer";

// motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section flex items-center" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="xl:grid xl:grid-cols-2 flex flex-col justify-center items-center xl:ps-0 xl:pe-0 ps-2 pe-2">
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
          >
            <Image
              src={"/assets/images/about/about-motor.png"}
              width={500}
              height={440}
              alt=""
            />
          </motion.div>
          {/* text & stats */}
          <div>
            <p className="text-justify xl:text-[19px] text-base leading-7 pt-2">
              Selamat datang di Buton Motor, tempat rental motor dengan keamanan
              dan kenyamanan sebagai prioritas utama. {""} Buton Motor
              memberikan solusi pintar untuk menghemat waktu dan biaya. Jelajahi
              kota dengan gaya dan kebebasan bersama kami, karena setiap
              perjalanan Anda adalah kesempatan baru untuk menciptakan kenangan
              indah.
            </p>
            {/* stats */}
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className="flex items-center  xl:gap-8 gap-10 pt-4 pb-4"
            >
              <div>
                <FaMotorcycle className="text-accent text-3xl" />

                <div className="text-[25px] font-bold text-primary ">
                  {inView ? (
                    <CountUp start={0} end={20} duration={3} delay={1} />
                  ) : null}
                  +
                </div>
                <div className="text-[12px] uppercase font-semibold">
                  <p>Tipe</p>
                  <p>Motor</p>
                </div>
              </div>
              <div>
                <MdOutlineMapsHomeWork className="text-accent text-3xl" />

                <div className="text-[25px] font-bold text-primary ">
                  {inView ? (
                    <CountUp start={0} end={10} duration={3} delay={1} />
                  ) : null}
                  +
                </div>
                <div className="text-[12px] uppercase font-semibold">
                  <p>Titik</p>
                  <p>Cabang</p>
                </div>
              </div>
              <div>
                <MdOutlineBuildCircle className="text-accent text-3xl" />

                <div className="text-[25px] font-bold text-primary ">
                  {inView ? (
                    <CountUp start={0} end={15} duration={3} delay={1} />
                  ) : null}
                  +
                </div>
                <div className="text-[12px] uppercase font-semibold">
                  <p>Titik</p>
                  <p>Servis</p>
                </div>
              </div>
            </motion.div>

            {/* btn lihat semua */}
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
            >
              <button className=" hidden xl:block btn p-2 btn-accent w-[150px] uppercase ">
                Lihat semua
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
