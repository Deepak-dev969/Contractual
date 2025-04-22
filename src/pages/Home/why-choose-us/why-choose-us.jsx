import * as React from "react";
import card1Icon from "../../../assets/svg/win rate 1.svg";
import card2Icon from "../../../assets/svg/features-1.svg";
import card3Icon from "../../../assets/svg/User-Friendly 1.svg";
import card4Icon from "../../../assets/svg/feature-3.svg";

const cardData = [
  {
    icon: card1Icon,
    subtitle: "Boost Your Win Rate by 70%",
    description: "Our users see significant success in securing contracts.",
  },
  {
    icon: card2Icon,
    subtitle: "Eliminate Expensive Proposal Writing Fees",
    description: "Our users see significant success in securing contracts.",
  },
  {
    icon: card3Icon,
    subtitle: "User-Friendly and Beginner-Friendly",
    description:
      "No experience needed—AI and video tutorials guide you every step.",
  },
  {
    icon: card4Icon,
    subtitle: "Increase Your Proposal Volume and Revenue",
    description: "Submit more bids with greater accuracy and compliance.",
  },
];

export default function BasicCard() {
  return (
    <div className="py-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col bg-transparent  max-w-sm mx-auto  text-white rounded-xl shadow-lg border border-none min-h-[400px]"
          >
            {/* Icon Wrapper */}
            <div className="flex justify-center">
              <div className="border w-[96%] h-[38vh] flex justify-center items-center border-[#eb19cc]  rounded-[20px] transition-all duration-400 ease-in-out hover:bg-gradient-to-r hover:from-[#eb19cc] hover:to-[#14e8dd] hover:border-none">
                <img
                  src={card.icon}
                  alt={`Card ${index + 1} Icon`}
                  className="mx-auto md:w-52 md:h-96 object-contain"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow justify-center mt-6 text-center px-4">
              <h3 className="text-[1.3rem] text-center font-bold mb-2">
                {card.subtitle}
              </h3>
              <p className="text-base text-gray-200 leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
