import { Carousel } from "flowbite-react";
import React from "react";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";

const Home = () => {
  return (
    <div className="bg-neutralSilver">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={slide1} alt="" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-3xl font-extrabold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Lessons And Insigths{" "}
                <span className="text-brandPrimary">from 16 years</span>
              </h1>
              <p className="text-neutralDGrey text-lg font-semibold mb-8">
                100% Quality completion every Task
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={slide2} alt="" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-3xl font-extrabold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Lessons And Insigths{" "}
                <span className="text-brandPrimary">from 16 years</span>
              </h1>
              <p className="text-neutralDGrey text-lg font-semibold mb-8">
                100% Quality completion every Task
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={slide3} alt="" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-3xl font-extrabold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Lessons And Insigths{" "}
                <span className="text-brandPrimary">from 16 years</span>
              </h1>
              <p className="text-neutralDGrey text-lg font-semibold mb-8">
                100% Quality completion every Task
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
