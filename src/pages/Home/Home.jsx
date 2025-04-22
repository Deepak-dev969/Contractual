import * as React from "react";
import heroimg from "../../assets/svg/AI Model.svg";
import herowave from "../../assets/svg/Hero-Ai-Wave.svg";
import heroBuilding from "../../assets/svg/Hero-BuildingModel Glow.svg";
import Herostars from "../../assets/svg/Hero-Star-Asset.svg";
import AetnaIcon from "../../assets/svg/hero-img-aetna.svg";
import comunnityIcon from "../../assets/svg/community-card.svg";
import SolicitionIcon from "../../assets/svg/hero-solicitation.svg";
import heroelipsis from "../../assets/images/hero-content-ellipse 2.png";
import section4img from "../../assets/svg/section4.svg";
import BasicCard from "../../pages/Home/why-choose-us/why-choose-us";
import FeatureCardSlide from "../../pages/Home/Features/Features";
import howitworkimg from "../../assets/svg/how-it-work.svg";
import playicon from "../../assets/svg/play-icon.svg";
import FeatureCardSlide2 from "../Home/who-we-serve/who-we-serve";
import section6img from "../../assets/svg/section6img.svg";

import Accordion from "../../components/Faq-accordion/Faq-accordion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div id="home-wrapper">
        <div
          id="home"
          className="hero-bg flex h-[100vh]  mb-10 justify-start items-center ml-8 mr-8"
        >
          <div className="hero-content w-[44%] h-[100vh] gap-y-10 flex flex-col justify-center items-left ">
            <h1 className="text-[3.2rem] py-2 font-[700] bg-[linear-gradient(to_right,#eb19cc,#14e8dd)] bg-clip-text text-transparent leading-[3.5rem]">
              Revolutionizing Contract Management
            </h1>
            <p className="text-white w-[96%] font-normal text-lg leading-[2.4rem] ">
              Our SaaS platform transforms how businesses respond to public
              solicitations by automating customized proposals, optimizing
              staffing, and ensuring compliance. Find vetted subcontractors,
              streamline bidding, and win more contracts—faster, easier, and
              with confidence.
            </p>

            <button className="hero-signup-btn z-10 w-44 font-semibold text-white capitalize bg-[linear-gradient(to_right,#eb19cc,#14e8dd)] px-[25px] py-[18px] rounded-[52px] hover:bg-[linear-gradient(to_right,#f642d8,#2bf7f4)] transition-all duration-800 ease-in-out">
              <Link to="/signup" className="inline-block ">
                {" "}
                Sign up now{" "}
              </Link>
            </button>

            <div className="absolute -z-0 left-0 -bottom-44">
              <img src={heroelipsis} alt="heroelipsis" />
            </div>
          </div>

          <div
            className="hero-img relative w-[56%] h-[90vh] justify-center items-center  bg-center bg-contain bg-no-repeat"
            style={{
              backgroundImage: `url(${Herostars})`,
            }}
          >
            <div className="hero-card  absolute right-[35rem] bottom-64  py-3 flex flex-row justify-between gap-x-2 items-center bg-[linear-gradient(to_right,#EDFBE082,#FFFFFF1F)] px-[25px] rounded-[52px]">
              <img src={AetnaIcon} alt="AetnaIcon" />
              <h6 className="text-white text-xs leading-4">
                <b>Document</b>
                <br /> Platinum Network
              </h6>
            </div>

            <div className="hero-card1 absolute right-11 bottom-64 py-3 flex flex-row justify-between gap-x-2 items-center bg-[linear-gradient(to_right,#EDFBE082,#FFFFFF1F)] px-[25px] rounded-[52px] z-50">
              <img src={comunnityIcon} alt="comunnityIcon" />
              <h6 className="text-white text-xs leading-4">
                <b>Community </b>
                <br />
                Platinum Network
              </h6>
            </div>
            <div className="hero-card3 absolute right-3 top-20 py-3 flex flex-row justify-between gap-x-2 items-center  bg-[linear-gradient(to_right,#EDFBE082,#FFFFFF1F)] px-[25px] rounded-[52px]">
              <img src={SolicitionIcon} alt="SolicitionIcon" />
              <h6 className="text-white text-xs leading-4">
                <b>Solicitation </b>
                <br />
                Platinum Network
              </h6>
            </div>
            <div className="hero-card4 absolute right-[28rem] py-3 flex flex-row justify-between gap-x-2 items-center bg-[linear-gradient(to_right,#EDFBE082,#FFFFFF1F)] px-[25px] rounded-[52px]">
              <img src={SolicitionIcon} alt="SolicitionIcon" />
              <h6 className="text-white text-xs leading-4">
                <b> Proposal </b>
                <br />
                Platinum Network
              </h6>
            </div>
            <img
              src={heroimg}
              alt="Hero"
              className="hero-image w-[100vw] h-[100vh] relative z-30"
            />

            <img
              src={herowave}
              alt="herowave"
              className="hero-wave absolute right-[-40px] top-[0.7rem] z-20 bg-cover  h-[90vh]"
            />

            <img
              src={heroBuilding}
              alt="heroBuilding"
              className="hero-building absolute right-[130px] top-[0.1rem] z-10"
            />
          </div>
          {/*hero-bg-wrapper*/}
        </div>

        <div
          id="about"
          className="why-choose-us ml-8 mr-8  h-[100vh] gap-y-6 flex flex-col items-center justify-center text-white px-0 md:px-0 sm:px-[2vw]"
        >
          <h2
            className="text-[2.3rem] underline decoration-[#b911e0] underline-offset-[16px] py-2 font-[700] bg-[linear-gradient(to_right,#eb19cc,#14e8dd)] bg-clip-text text-transparent leading-[3.5rem]"
            style={{ textUnderlineOffset: "16px" }}
          >
            Why Choose Us
          </h2>
          <h3 className="text-[1.3rem] text-center font-bold">
            The #1 AI-Powered Proposal Platform for Government Contractors
          </h3>
          <div className="card-wrapper flex justify-center items-center gap-5  flex-wrap sm:flex-col sm:gap-2.5">
            {" "}
            <BasicCard />
          </div>
        </div>

        <div
          id="services"
          className="Features  h-screen flex flex-col items-center ml-8 mr-8"
        >
          <h2 className="Features mb-8 bg-gradient-to-r font-bold from-[#eb19cc] to-[#14e8dd] bg-clip-text text-transparent text-[2.8rem] underline underline-offset-[16px] decoration-[#eb19cc]">
            Features
          </h2>
          <h3 className="text-white text-[1.3rem] text-center font-bold">
            AI-Powered Tools to Help You Win More Contracts
          </h3>
          <div className="feature-card-wrapper">
            <FeatureCardSlide />
          </div>
        </div>

        <div className="Mission-Statement-wrapper ml-8 mr-8 h-[100vh] flex flex-row justify-center items-center ">
          <div className="Mission-Statement-img-div w-5/6    ">
            <img
              src={section4img}
              alt="Mission-Statement"
              className="h-[75vh]"
            />
          </div>
          <div className="Mission-Statement-content-div w-5/6  flex flex-col gap-y-10  justify-start items-start">
            <h2 class="text-[2.8rem] font-bold bg-gradient-to-r from-[#eb19cc]  to-[#00e7e7] bg-clip-text text-transparent">
              <span class="underline decoration-[#b911e0] underline-offset-[16px]">
                Mission S
              </span>
              tatement
            </h2>

            <h3 className="text-white text-[1.6rem] text-left font-bold">
              Empowering Small Businesses to Succeed in Government
              <br />
              Contracting—Globally
            </h3>
            <p className="text-white text-[1.1rem] font-[200] leading-[2.1rem] ">
              Our mission is to provide small businesses, freelancers, and
              government contractors worldwide with an affordable, AI-driven
              platform that streamlines the proposal writing process. This
              platform is designed as an international solution, making
              government contracting accessible across borders and industries.
              We believe that securing government contracts should be accessible
              to everyone—regardless of experience or resources. Our technology
              ensures compliance, maximizes efficiency, and increases contract
              win rates while eliminating the high costs of traditional proposal
              writing services.
            </p>
          </div>
        </div>

        <div className="who-we-serve-wrapper gap-y-5 ml-8 mr-8 h-full mb-16  flex flex-col justify-center items-center">
          <h2 class="text-[2.8rem] font-bold bg-gradient-to-r from-[#eb19cc]  to-[#00e7e7] bg-clip-text text-transparent">
            <span class="underline decoration-[#b911e0] underline-offset-[16px]">
              Who We S
            </span>
            erve
          </h2>
          <h3 className="text-white text-[1.3rem] text-center font-bold">
            Our AI-powered proposal writing platform is built for:
          </h3>

          {/* <Typography variant="h6" sx={{ color: "#fff" }}>
           
          </Typography> */}
          <h3 className="text-white text-[1.1rem]  text-center font-[200] leading-[2.1rem] w-5/6">
            Our platform is designed to help businesses of all sizes compete and
            win government <br />
            contracts at any level.
          </h3>
          <div className="flex flex-row justify-center items-center">
            <FeatureCardSlide2 />
          </div>
        </div>

        <div
          id="community"
          className="h-[100vh] relative rounded-[40px] flex flex-col justify-end items-center pt-[4vw] pb-[1vw] mb-[8vw] bg-gradient-to-r from-[#31072d] to-[#043331]"
        >
          <h2 className="text-[2.3rem] absolute top-28  font-bold bg-gradient-to-r from-[#eb19cc] to-[#14e8dd] bg-clip-text text-transparent  underline decoration-[#eb19cc] underline-offset-[16px]">
            Community Hub
          </h2>

          <img src={section6img} className="w-[100%] pl-8 pr-8 " />
        </div>

        <div className="How-it-work w-[100%] bg-[#151515] flex flex-col items-center p-8 ">
          <h2
            className="text-[2.3rem] mb-14 underline decoration-[#b911e0] underline-offset-[16px] py-2 font-[700] bg-[linear-gradient(to_right,#eb19cc,#14e8dd)] bg-clip-text text-transparent leading-[3.5rem]"
            style={{ textUnderlineOffset: "16px" }}
          >
            How its work
          </h2>

          <div className="flex flex-row ">
            <div className="content-div w-[54%]  flex flex-col gap-8 ">
              <h3 className="text-white text-4xl font-bold">
                Simple Steps to Your Best Proposal Yet
              </h3>
              <ol className="flex flex-col gap-8 text-[1.2rem] leading-relaxed">
                <li className="text-white ">
                  <b>1: Enter Your Business Information</b>{" "}
                  <span className="font-light">
                    - Provide key details about your company, capabilities, and
                    past performance.
                  </span>
                </li>
                <li className="text-white">
                  <b>2: Upload a Solicitation</b>{" "}
                  <span className="font-light">
                    - Upload a PWS or SOW, and let our AI break it down into
                    actionable steps.
                  </span>
                </li>
                <li className="text-white">
                  <b>3: Optimize Staffing & Subcontracting</b>{" "}
                  <span className="font-light">
                    - Our platform finds required roles and vetted
                    subcontractors, boosting your bid. Connect directly or let
                    our team handle outreach.
                  </span>
                </li>
                <li className="text-white">
                  <b>4: Generate a Fully Custom Proposal</b>
                  <span className="font-light">
                    - Our AI ensures every proposal is built from scratch for
                    compliance and maximum impact—never a recycled template.
                  </span>
                </li>
                <li className="text-white">
                  <b>5: Submit & Win More Contracts</b>
                  <span className="font-light">
                    - On average, our users increase their bid wins by 70%,
                    helping them grow their businesses without relying on
                    expensive consultants.
                  </span>
                </li>
              </ol>
              <button className="hero-signup-btn w-fit font-semibold text-white capitalize bg-[linear-gradient(to_right,#eb19cc,#14e8dd)] px-[35px] py-[20px] rounded-[52px] hover:bg-[linear-gradient(to_right,#f642d8,#2bf7f4)] px-[25px] py-[10px] rounded-[52px] transition-all duration-800 ease-in-out">
                <Link to="/signup">Sign Up Today</Link>
              </button>
            </div>
            <div className="video-div w-[46%] relative flex justify-end pt-3">
              <img
                src={howitworkimg}
                alt="how it work"
                className="h-[64vh] w-[90%]"
              />
              <img
                src={playicon}
                alt="play icon"
                className="absolute bottom-80 right-[36%]"
              />
            </div>
          </div>
        </div>

        <div
          id="faqs"
          className="FAQ flex flex-col pt-10 justify-center items-center ml-8 mr-8"
        >
          <h2 className="text-[2.3rem]  underline decoration-[#b911e0] underline-offset-[16px] py-2 font-[700] bg-[linear-gradient(to_right,#eb19cc,#14e8dd)] bg-clip-text text-transparent leading-[3.5rem]">
            {" "}
            Frequently Asked Questions (FAQ’S){" "}
          </h2>

          <Accordion />
        </div>
        {/*Home-Wrapper*/}
      </div>
    </>
  );
}
