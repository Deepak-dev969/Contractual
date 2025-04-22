import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import rightarrow from "../../../assets/svg/right-arrow.svg";
import leftarrow from "../../../assets/svg/left-arrow.svg";
import FeatureCard5img from "../../../assets/svg/feature-slide5.svg";
import FeatureCard6img from "../../../assets/svg/feature-slide6.svg";
import FeatureCard7img from "../../../assets/svg/feature-slide7.svg";
import FeatureCard8img from "../../../assets/svg/feature-slide8.svg";

export default function FeatureCardSlide2() {
  const swiperRef = useRef(null);

  const swiperSlideStyle2 = {
    width: "25%",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out",
  };

  const textStyle2 = {
    color: "white",
    fontWeight: "300",
    fontSize: "1rem",
    marginTop: "1rem",
    lineHeight: "1.5",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  const navarrow2 = {
    color: "white",
    fontSize: "1.5rem",
    backgroundColor: "rgba(217, 217, 217, 0.5)",
    padding: "6px 8px",
    borderRadius: "50%",
    cursor: "pointer",
    zIndex: 10,
  };

  return (
    <div className="relative flex justify-center items-center ">
      <Swiper
        spaceBetween={1}
        slidesPerView="auto"
        slidesPerGroup={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".swiper-prev",
          nextEl: ".swiper-next",
        }}
        modules={[Navigation, Autoplay]}
        className="feature-swiper"
        ref={swiperRef}
      >
        <SwiperSlide className="custom-slide" style={swiperSlideStyle2}>
          <img
            src={FeatureCard5img}
            alt="Feature Card 1"
            className="mb-4  w-96"
          />
          <h3 className="text-white text-[1.3rem] font-bold">
            Government and State Agencies (Globally)
          </h3>
          <p style={textStyle2}>
            Streamlining procurement and contract management for federal, state,
            and local entities worldwide.
          </p>
        </SwiperSlide>
        <SwiperSlide className="custom-slide" style={swiperSlideStyle2}>
          <img
            src={FeatureCard6img}
            alt="Feature Card 2"
            className="mb-4  w-96"
          />
          <h3 className="text-white text-[1.3rem]  font-bold">
            Subcontractors and Suppliers
          </h3>
          <p style={textStyle2}>
            Connecting subcontractors with prime contractors for more contract
            opportunities.
          </p>
        </SwiperSlide>
        <SwiperSlide className="custom-slide" style={swiperSlideStyle2}>
          <img
            src={FeatureCard7img}
            alt="Feature Card 3"
            className="mb-4  w-96"
          />
          <h3 className="text-white text-[1.3rem] font-bold">
            Freelancers and Independent Contractors
          </h3>
          <p style={textStyle2}>
            Enabling individuals to submit winning bids without hiring expensive
            consultants.
          </p>
        </SwiperSlide>
        <SwiperSlide className="custom-slide" style={swiperSlideStyle2}>
          <img
            src={FeatureCard8img}
            alt="Feature Card 4"
            className="mb-4  w-96"
          />
          <h3 className="text-white text-[1.3rem] font-bold">
            {" "}
            Established Government Contractors
          </h3>
          <p style={textStyle2}>
            Improving efficiency and increasing bid wins with automated,
            compliant, and tailored proposals.
          </p>
        </SwiperSlide>
      </Swiper>

      <div
        className="swiper-prev"
        style={{
          ...navarrow2,
          left: "-15px",
          position: "absolute",
          top: "30%",
          transform: "translateY(-100%)",
        }}
      >
        <img src={leftarrow} />
      </div>
      <div
        className="swiper-next"
        style={{
          ...navarrow2,
          right: "-15px",
          position: "absolute",
          top: "30%",
          transform: "translateY(-100%)",
        }}
      >
        <img src={rightarrow} /> {/*&gt;*/}
      </div>
    </div>
  );
}
