'use client' // Add this directive at the top to specify client-side rendering
import React, { useEffect } from "react";
import Image from "next/image";
import { FaDiscord } from "react-icons/fa"; // Importing Discord logo icon
import AOS from "aos"; // Import AOS for animation
import "aos/dist/aos.css"; // Import AOS styles

const PopularDetailPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration for smooth animation
  }, []);

  return (
    <div className="pt-24 pb-16">
      <h1
        className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center"
        data-aos="fade-up"
      >
        KH1EV COMMUNITY
      </h1>
      <div
        className="mt-10 flex flex-col lg:flex-row gap-12 items-center justify-center w-[90%] mx-auto"
        data-aos="fade-up"
      >
        <div className="relative w-full lg:w-1/2 h-96" data-aos="fade-right">
          <Image
            src="/images/img1.png"
            alt="KH1EV Community"
            layout="fill"
            objectFit="contain"
            className="rounded-xl shadow-lg"
          />
        </div>
        <div
          className="w-full lg:w-1/2 text-gray-800"
          data-aos="fade-left"
        >
          <h2 className="text-xl font-bold mb-4">OFFICIAL DISCORD SERVER</h2>
          <p className="text-sm leading-7">
            Kh1ev Community adalah rumah dari Yuki Suou — sebuah server Discord yang ramah dan penuh fitur. 
            Di sini, kamu bisa menikmati berbagai fasilitas seperti chatbot AI, fitur keamanan server, sistem leveling, 
            hingga event dan dukungan komunitas. Bergabunglah bersama ribuan pengguna lain yang aktif dan membangun komunitas yang solid!
          </p>

          {/* Join Discord Button with Discord Logo */}
          <div className="mt-6" data-aos="zoom-in">
            <a href="https://discord.gg/MwNE7Vfb6t" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-3 text-white bg-[#E93306] hover:bg-[#F86401] rounded-lg text-lg font-semibold transition duration-300 flex items-center gap-2">
                <FaDiscord className="text-white text-xl" /> {/* Discord logo */}
                Join
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularDetailPage;
