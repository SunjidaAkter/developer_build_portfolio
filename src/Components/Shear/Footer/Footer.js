/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom"
import logo from "../../../Assets/Images/nav-footer/logo.png";

import "./footer.css";

const Footer = () => {
  return (
    <section id="footer ">
      <footer className="footer p-10 bg-white  text-base-content mt-20">
        <div className="md:px-[100px] px-[100px] lg:px-0 text-base-content md:grid md:grid-cols-2 grid grid-cols-1 lg:grid lg:grid-cols-4 custom_container justify-center">
          <div>
            <p className="text-2xl text-gray-500 font-normal mb-2">
              Developer Build
            </p>
            <p className="text-gray-400">Polashbari, Ashulia</p>
            <p className="text-gray-400">Savar, Dhaka-1344</p>
            <p className="text-gray-400">Bangladesh</p>

            <p className=" text-gray-400 pt-5">
              {" "}
              <span className="font-bold text-md text-gray-500">
                Phone:
              </span>{" "}
              +8801998839126
            </p>
            <p className="text-gray-400">
              <span className="font-bold text-md text-gray-500">Email:</span>{" "}
              developerbuild62@gmail.com
            </p>
          </div>
          <div>
            <p className="text-xl text-gray-700 font-semibold mb-2">
              Useful Links
            </p>
            <Link to="/" className="text-gray-500 hover:text-blue-500 cursor-pointer block">
              <i className="fa-solid fa-chevron-right text-blue-500 mr-1"></i>{" "}
              Home
            </Link>
            <Link to="/aboutUs" className="text-gray-500 hover:text-blue-500 cursor-pointer block">
              <i className="fa-solid fa-chevron-right text-blue-500 mr-1"></i>{" "}
              About us
            </Link>
            <Link to="/services" className="text-gray-500 hover:text-blue-500 cursor-pointer block">
              <i className="fa-solid fa-chevron-right text-blue-500 mr-1"></i>{" "}
              Services
            </Link>
            <Link to="/teamOfService" className="text-gray-500 hover:text-blue-500 cursor-pointer block">
              <i className="fa-solid fa-chevron-right text-blue-500 mr-1"></i>{" "}
              Team of Service
            </Link>
            <Link to="/privacyPolicy" className="text-gray-500 hover:text-blue-500 cursor-pointer block">
              <i className="fa-solid fa-chevron-right text-blue-500 mr-1"></i>{" "}
              privacy policy
            </Link>
          </div>
          <div>
            <p className="text-xl text-gray-700 font-semibold mb-2">
              Our Services
            </p>
            <Link to="/webDesign" className="text-gray-500 hover:text-blue-500 cursor-pointer block">
              <i className="fa-solid fa-chevron-right text-blue-500 mr-1"></i>{" "}
              Web Design
            </Link>
            <Link to="/webDevelopment" className="text-gray-500 hover:text-blue-500 cursor-pointer block">
              <i className="fa-solid fa-chevron-right text-blue-500 mr-1"></i>{" "}
              Web Development
            </Link>
            <Link to="/productManagement" className="text-gray-500 hover:text-blue-500 cursor-pointer block">
              <i className="fa-solid fa-chevron-right text-blue-500 mr-1"></i>{" "}
              Product Management
            </Link>
            <Link to="/marketing" className="text-gray-500 hover:text-blue-500 cursor-pointer block">
              <i className="fa-solid fa-chevron-right text-blue-500 mr-1"></i>{" "}
              Marketing
            </Link>
            <Link to="/graphicDesign" className="text-gray-500 hover:text-blue-500 cursor-pointer block">
              <i className="fa-solid fa-chevron-right text-blue-500 mr-1"></i>{" "}
              Graphic Design
            </Link>
          </div>
          <div>
            <span className="text-gray-700 text-xl font-semibold">
              Join Our Newsletter
            </span>
            <div className="form-control ">
              <label className="label mb-5">
                <span className="label-text text-gray-500">
                  Stay with us by subscribing to get our daily newsletter. thank
                  you
                </span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="input input-bordered border-blue-300 w-full pr-16"
                />
                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer  py-8  text-black custom_container">
        <div className="items-center grid-flow-col px-20 lg:px-0  md:px-0 ">
          <img className="h-[50px] w-[50px]" src={logo} alt="" />
          <p className="text-gray-500">
            © Copyright <span className="font-bold">Developer Build.</span> All
            Rights Reserved <br />
            Designed by <span className="text-blue-400">Developer-Build</span>
          </p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <div className="social-links text-center flex justify-center items-center pt-1 px-20 lg:px-0 md:px-0">
              <a href="#" className="twitter">
                <i className="fa-brands  fa-twitter"></i>
              </a>
              <a href="#" className="facebook">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" className="instagram">
                <i className="fa-brands  fa-instagram"></i>
              </a>
              <a href="#" className="google-plus">
                <i className="fa-brands  fa-skype"></i>
              </a>
              <a
                target="black"
                href="https://www.linkedin.com/company/developer-build/"
                className="linkedin"
              >
                <i className="fa-brands  fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
