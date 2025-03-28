import React, { useEffect } from "react";
import { FaCheck } from "react-icons/fa6";

type priceProps = {
  price: number;
  plan: string;
};

function PriceCard({ price, plan }: priceProps) {
  const priceFeatures = [
    { feature: "Wattpad Story" },
    { feature: "Management Improvement" },
    { feature: "Anime Roleplay" },
    { feature: "Temp Email" },
    { feature: "Multi-Language AI" },
    { feature: "Exclusive Discounts" },
  ];

  useEffect(() => {
    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.src = "https://storage.sociabuzz.com/storage/js/main/buttononwebsite/index.min.js";
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = 'sbBoW.draw("yukisuou","QlVZ","position-top-middle","#ff8600","#FFFFFF")';
    document.body.appendChild(script2);
  }, []);

  return (
    <div className="bg-white p-10 rounded-lg shadow-lg">
      <p className="mt-3 text-xl font-semibold text-[#E93306] text-center">
        {plan} Plan
      </p>
      <div className="font-medium text-3xl mt-4 text-center">
        $ <span className="text-5xl font-bold">{price}</span>/Year
      </div>
      <p className="mt-2 text-gray-600 text-center">Per server</p>
      <div className="mt-10">
        {priceFeatures.map((item, index) => (
          <div
            key={index}
            className="text-center mb-4 flex items-center space-x-3"
          >
            <div className="text-center w-8 h-8 bg-gray-300 rounded-full justify-center flex items-center flex-col">
              <FaCheck className="text-green-500" />
            </div>
            <p className="text-sm font-semibold text-gray-700">
              {item.feature}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <button
          id="sociabuzz-button"
          className="block w-full p-3 text-base md:text-lg text-white font-bold bg-gradient-to-r from-[#F86401] via-[#E93306] to-[#FFA500] hover:from-[#FF5733] hover:via-[#FFA500] hover:to-[#FFD700] transition-all duration-300"
          onClick={() => {
            // Trigger the Sociabuzz button functionality
            if (window.sbBoW) {
              window.sbBoW.draw("yukisuou", "QlVZ", "position-top-middle", "#ff8600", "#FFFFFF");
            }
          }}
        >
          BUY
        </button>
      </div>
    </div>
  );
}

export default PriceCard;