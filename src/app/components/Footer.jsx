"use client";
import React from "react";
import Image from "next/image";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import Copyright from "./Copyright";

export default function Footer() {
  return (
    <footer className="" id="contact">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.4 }}
        className="container mx-auto  p-4 xl:pt-24 pt-10"
      >
        <div className="xl:grid xl:grid-cols-4 flex flex-col gap-y-9  ">
          {/* logo kontak person */}
          <div className="flex flex-col gap-y-5">
            <div className="pb-2">
              <Image
                src={"/assets/icons/logo-potong.png"}
                width={150}
                height={150}
                alt=""
              />
            </div>
            {/* text */}
            <div>Hubungi kami untuk informasi selengkapnya </div>

            {/* phone and email */}
            <div className="font-bold text-[15px]">
              <div className="flex gap-3 items-center ">
                <FaPhoneAlt />
                <div>085352258766</div>
              </div>

              <div className="flex gap-3 items-center ">
                <FaEnvelope />
                <div>butonrental@gmail.com</div>
              </div>
            </div>
          </div>

          {/* company */}
          <div className="flex flex-col gap-y-5">
            <div className="pb-2 text-primary font-bold flex flex-col gap-4 ">
              <p className="text-[19px] text-primary">Company</p>
              <Link href={""}>Baubau</Link>
              <Link href={""}>Karir</Link>
              <Link href={""}>Mobile</Link>
              <Link href={""}>Blog</Link>
              <Link href={""}>Bagaimana kami bekerja</Link>
            </div>
          </div>

          {/* jam kerja */}
          <div className="flex flex-col gap-y-5">
            <div className="pb-2 text-primary flex flex-col gap-4 ">
              <p className="text-[19px] text-primary font-bold">Jam Kerja</p>
              <p>
                Senin-Jumat <span className="span">08.00-18.00</span>
              </p>
              <p>
                Sabtu <span className="span">09.00-16.00</span>
              </p>
              <p>
                Minggu <span className="span">Tutup</span>
              </p>
            </div>
          </div>

          {/* kirim pesan */}
          <div className="flex flex-col gap-y-5">
            <div className="pb-2  flex flex-col gap-4 ">
              <p className="text-[19px] text-primary font-bold">Pesan</p>
              <div className="flex flex-col gap-4 xl:w-full w-[360px]">
                <input
                  type="email"
                  placeholder="Email"
                  className="px-4 py-2 rounded-md shadow"
                />
                <input
                  type="text"
                  placeholder="Pesan anda"
                  className="px-4 py-2 rounded-md shadow  "
                />
                <button className="btn w-[80px] p-2 btn-accent">Kirim</button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="pt-20">
        <Copyright />
      </div>
    </footer>
  );
}
