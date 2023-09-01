import React, { FC } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="text-white body-font bg-primary/60 mt-auto">
      <div className=" max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
        <div className=" px-4 py-2 mx-auto flex items-center sm:flex-row flex-col">
          <p className="text-sm text-white sm:ml-4 sm:pl-4  sm:py-2 sm:mt-0 mt-4">
            © {new Date().getFullYear()} Online Store
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-white hover:scale-110">
              <BsFacebook size={18} />
            </a>
            <a className="ml-3 text-white hover:scale-110">
              <BsTwitter size={18} />
            </a>
            <a className="ml-3 text-white hover:scale-110">
              <AiFillInstagram size={19} />
            </a>
            <a className="ml-3 text-white hover:scale-110">
              <BsLinkedin size={18} />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
