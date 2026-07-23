import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#002342] text-white">
        <h1 className="flex justify-center pt-10 font-bold text-2xl">
          Ready for Shorter, Smarter Links?
        </h1>
        <p className="flex justify-center pt-3">
          Transform a long link into a short, trackable one using our platform.
          Create a free account or subscribe to a paid plan today!
        </p>
        <div className="flex justify-center mt-5 gap-3 pb-10">
          <button className="px-5 py-2 bg-white text-black rounded-lg hover:bg-amber-100">
            View Plans
          </button>

          <button className="px-5 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500">
            Create Free Account
          </button>
        </div>
      </div>

      <div className="text-white pt-20 pb-20 flex justify-evenly bg-linear-to-r from-[#1f8a94] to-[#0a2f4d]">
        <div className="w-50">
          <h1 className="font-bold text-[23px]">Features</h1>
          <br />
          <div className="text-lg">
            <a href="#" className="hover:underline">
              Link Editor
            </a>
            <br />
            <a href="#" className="hover:underline">
              Link Management
            </a>
            <br />
            <a href="#" className="hover:underline">
              Branded Links
            </a>
            <br />
            <a href="#" className="hover:underline">
              Short URL Tracking
            </a>
            <br />
            <a href="#" className="hover:underline">
              QR Code Generator
            </a>
            <br />
            <a href="#" className="hover:underline">
              Short URL API
            </a>
          </div>
        </div>
        <div className="w-50">
          <h1 className="font-bold text-[23px]">Resources</h1>
          <br />
          <div className="text-lg">
            <a href="#" className="hover:underline">
              Blog
            </a>
            <br />
            <a href="#" className="hover:underline">
              For Developers
            </a>
            <br />
            <a href="#" className="hover:underline">
              Our Proven Process
            </a>
            <br />
            <a href="#" className="hover:underline">
              About Us
            </a>
          </div>
        </div>
        <div className="w-50">
          <h1 className="font-bold text-[23px]">Contact Us</h1>
          <br />
          <div className="text-lg">
            <a href="#" className="hover:underline">
              Help Desk
            </a>
            <br />
            <a href="#" className="hover:underline">
              Contact Sales
            </a>
            <br />
            <a href="#" className="hover:underline">
              Contact Support
            </a>
            <br />
            <a href="#" className="hover:underline">
              Report Abuse
            </a>
          </div>
        </div>
        <div className="w-50">
          <h1 className="font-bold text-[23px]">Legal</h1>
          <br />
          <div className="text-lg">
            <a href="#">Terms of Service</a>
            <br />
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <br />
            <a href="#" className="hover:underline">
              Cookie Policy
            </a>
            <br />
            <a href="#" className="hover:underline">
              Accessibility Statement
            </a>
            <br />
            <a href="#" className="hover:underline">
              Privacy Manager
            </a>
          </div>
        </div>
        <div className="pt-28">
          <FontAwesomeIcon
            className="pl-15"
            icon={faFacebookF}
            style={{ fontSize: "17px" }}
          />
          <FontAwesomeIcon
            className="pl-1"
            icon={faInstagram}
            style={{ fontSize: "17px" }}
          />
          <FontAwesomeIcon
            className="pl-1"
            icon={faLinkedinIn}
            style={{ fontSize: "17px" }}
          />
          <FontAwesomeIcon
            className="pl-1"
            icon={faXTwitter}
            style={{ fontSize: "17px" }}
          />
          <h1 className="text-[40px] pt-4 font-bold font-sans">TinyURL</h1>
          <p className="pl-2 pt-3">© 2026 TinyURL LLC</p>
          <p className="pl-4">All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
