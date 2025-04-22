import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import rightarrow from "../../../assets/svg/right-arrow.svg";
import leftarrow from "../../../assets/svg/left-arrow.svg";
import FeatureCard1img from "../../../assets/svg/feature-slide1.svg";
import FeatureCard2img from "../../../assets/svg/feature-slide2.svg";
import FeatureCard3img from "../../../assets/svg/feature-slide3.svg";
import FeatureCard4img from "../../../assets/svg/feature-slide4.svg";

export default function FeatureCardSlide() {
  const swiperRef = useRef(null);

  const swiperSlideStyle = {
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

  const textStyle = {
    color: "white",
    fontWeight: "300",
    fontSize: "1rem",
    marginTop: "1rem",
    lineHeight: "1.5",
    // padding: "16px 0px",
    display: "-webkit-box",
    WebkitLineClamp: 5,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  const navarrow = {
    color: "white",
    fontSize: "1.5rem",
    backgroundColor: "rgba(217, 217, 217, 0.5)",
    padding: "6px 8px",
    borderRadius: "50%",
    cursor: "pointer",
    zIndex: 10,
  };

  return (
    <div className="relative w-full flex justify-center items-center py-6">
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
        <SwiperSlide className="custom-slide" style={swiperSlideStyle}>
          <img
            src={FeatureCard1img}
            alt="Feature Card 1"
            className="mb-4 w-96"
          />
          <h3 className="text-white text-[1.3rem] font-bold">
            Simplified Solicitation Breakdown
          </h3>
          <p style={textStyle}>
            Instantly analyze complex Performance Work Statements (PWS) and
            Statements of Work (SOW) with our AI-powered tool, making it easy to
            understand requirements and respond effectively.
          </p>
        </SwiperSlide>
        <SwiperSlide className="custom-slide" style={swiperSlideStyle}>
          <img
            src={FeatureCard2img}
            alt="Feature Card 2"
            className="mb-4  w-96"
          />
          <h3 className="text-white text-[1.3rem]  font-bold">
            Cost Estimation and Profit Margins
          </h3>
          <p style={textStyle}>
            Input your business expenses and receive real-time profit margin
            calculations, including state-specific tax estimates and overall
            business cost, so you can bid competitively and profitably.
          </p>
        </SwiperSlide>
        <SwiperSlide className="custom-slide" style={swiperSlideStyle}>
          <img
            src={FeatureCard3img}
            alt="Feature Card 3"
            className="mb-4  w-96"
          />
          <h3 className="text-white text-[1.3rem] font-bold">
            Bid Optimization and Smart Staffing
          </h3>
          <p style={textStyle}>
            Optimize bids by identifying certifications, roles, and expertise.
            Our platform suggests qualified subcontractors, estimates workforce
            needs, and ensures compliance for efficient staffing and contract
            success.
          </p>
        </SwiperSlide>
        <SwiperSlide className="custom-slide" style={swiperSlideStyle}>
          <img
            src={FeatureCard4img}
            alt="Feature Card 4"
            className="mb-4  w-96"
          />
          <h3 className="text-white text-[1.3rem]  font-bold">
            Smart Project Management Solutions
          </h3>
          <p style={textStyle}>
            Get AI-recommended project management methodologies tailored to your
            industry, including customizable organizational charts for seamless
            execution.
          </p>
        </SwiperSlide>
      </Swiper>

      <div
        className="swiper-prev"
        style={{
          ...navarrow,
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
          ...navarrow,
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
