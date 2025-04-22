import * as React from "react";
import { Button } from "@mui/material";
import BrandLogo from "../../assets/svg/ContractualLogo.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-wrapper  w-[100%]  bg-[#191f2f] flex flex-col justify-center ">
      <div className="footer-content flex flex-row gap-y-8 ml-10 mr-10  h-[40vh] justify-between items-center">
        <div className="flex flex-col  gap-4 w-[25%] h-[60%]  ">
          <Link to="/">
            <img src={BrandLogo} alt="b" className="w-[14vw] " />
          </Link>
          <p className="text-white w-[70%] text-base">
            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
          </p>
        </div>
        <div className="flex flex-col gap-4 w-[25%] h-[60%] ">
          <h3 className="text-white font-[699]">Headquarters</h3>
          <h6 className="text-white ">
            <MailOutlineIcon className="mr-1" sx={{ color: "#C93ACF" }} />
            contact@company.com
          </h6>
          <h6 className="text-white">
            <PhoneIcon className="mr-1" sx={{ color: "#C93ACF" }} /> (414) 687 -
            5892
          </h6>
          <h6 className="text-white">
            {" "}
            <LocationOnIcon className="mr-1" sx={{ color: "#C93ACF" }} /> 794
            Mcallister St San Francisco, 94102
          </h6>
        </div>
        <div className="flex flex-col gap-6 w-[12%] h-[60%]  ">
          <div className="flex flex-row gap-4 justify-center items-center">
            <FacebookIcon sx={{ color: "#D62DCE" }} />
            <InstagramIcon sx={{ color: "#D62DCE" }} />
            <LinkedInIcon sx={{ color: "#D62DCE" }} />
            <TwitterIcon sx={{ color: "#D62DCE" }} />
            <YouTubeIcon sx={{ color: "#D62DCE" }} />
          </div>
          <div>
            <div className="flex flex-col gap-6">
              <Button variant="text" id="get-started-btn">
                <Link to="/signup">Sign Up</Link>
              </Button>
              <Button variant="text" id="login-btn">
                <Link to="/user-agreement">Insights</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-white-200  h-[4vw] flex justify-center items-center">
        <h4 className="text-white text-center">
          All Rights Reserved |{" "}
          <span className="underline  underline-offset-[5px]">
            <Link to="/terms-and-conditions">Terms and Conditions </Link>
          </span>
          |{" "}
          <span className="underline underline-offset-[5px]">
            <Link to="/privacy-policy">Privacy Policy</Link>
          </span>
        </h4>
      </div>
    </div>
  );
}
