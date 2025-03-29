import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";

const KH1EVCommunity = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Head>
        <title>About Our Server</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="text-center p-6 bg-white shadow-lg rounded-lg" data-aos="fade-up">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">About Our Server</h1>
          <p className="text-gray-600">
            We are an active community where you can find fun, learning, and a great time. From gaming to tech
            discussions, we offer a diverse range of channels that cater to all interests.
          </p>
        </div>
      </div>
    </>
  );
};

export default KH1EVCommunity;
