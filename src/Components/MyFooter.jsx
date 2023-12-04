import React from "react";

import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const MyFooter = () => {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            {/* <a
              href=""
              className="text-2xl font-semibold flex items-center space-x-3"
            >
              <img
                src="https://i.ibb.co/MMSnMbF/NAR-LOGO.jpg"
                alt=""
                className="w-10 inline-block items-center"
              />
              <span className="text-[#263238]">NAR Group</span>
            </a> */}
            <Footer.Brand
              href="https://flowbite.com"
              src="https://i.ibb.co/MMSnMbF/NAR-LOGO.jpg"
              alt="NAR Group Logo"
              name="NAR Group"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <Footer.Title title="Contact us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  className="font-bold"
                  href="www.narengineeringsolution.com"
                >
                  Website
                </Footer.Link>
                <Footer.Link href="tel:+8801712711823">
                  <span className="font-bold">Make a Call:</span> +8801712711823
                </Footer.Link>
                <Footer.Link href="mailto:nareng.solu@nar-groupbd.com">
                  <span className="font-bold">Mail to Office:</span>{" "}
                  nareng.solu@nar-groupbd.com
                </Footer.Link>
                <Footer.Link href="mailto:nareng.solu@nar-groupbd.com">
                  <span className="font-bold">Make a MD:</span>{" "}
                  raju.ahamad@nar-groupbd.com
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Office" />
              <Footer.LinkGroup col>
                <p className="text-sm font-bold text-gray-500 ">
                  Visit our headquarters and say 'Hi'
                </p>
                <p className="text-sm text-blue-500 ">
                  Level #4 <br />
                  House #5 <br />
                  Road #3 <br />
                  Dhanmondi, Dhaka-1207 <br />
                  Bangladesh
                </p>
                {/* <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link> */}
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="NAR Group™" year={2023} />
          {/* <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div> */}
        </div>
      </div>
    </Footer>
  );
};

export default MyFooter;
