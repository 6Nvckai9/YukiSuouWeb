import React from "react";
import Image from "next/image";

const PopularDetailPage = () => {
  return (
    <div className="pt-24 pb-16">
      <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        KH1EV COMMUNITY
      </h1>
      <div className="mt-10 flex flex-col lg:flex-row gap-12 items-center justify-center w-[90%] mx-auto">
        <div className="relative w-full lg:w-1/2 h-96">
          <Image
            src="/images/img1.png"
            alt="KH1EV Community"
            layout="fill"
            objectFit="contain"
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="w-full lg:w-1/2 text-gray-800">
          <h2 className="text-xl font-bold mb-4">Tentang Discord Server Kh1ev</h2>
          <p className="text-sm md:text-base leading-relaxed mx-auto w-[50%]">
            Kh1ev Community adalah rumah dari Yuki Suou — sebuah server Discord yang ramah dan penuh fitur. 
            Di sini, kamu bisa menikmati berbagai fasilitas seperti chatbot AI, fitur keamanan server, sistem leveling, 
            hingga event dan dukungan komunitas. Bergabunglah bersama ribuan pengguna lain yang aktif dan membangun komunitas yang solid!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopularDetailPage;
