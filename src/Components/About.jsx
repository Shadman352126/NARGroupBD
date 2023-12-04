import React from "react";
import about from "../assets/about.jpeg";

const About = () => {
  return (
    <div>
      {/* about us text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="mx-auto flex flex-col md:flex-row justify-between gap-12 items-center">
          <div className="w-1/2">
            <img src={about} alt="" />
          </div>
          <div className="md:w-1/2 mx-auto">
            <h2 className="text-2xl md:text-4xl font-semibold text-neutralDGrey mb-4 md:w-4/5">
              <span className="text-4xl md:text-6xl font-extrabold text-brandPrimary">
                N.A.R Engineering <br />
              </span>{" "}
              A Multi discipline Engineering service oriented company
            </h2>
            <p className="text-sm text-neutralGrey mb-8">
              We have been working in Hyundai Engineering Co; Ltd. (APSCL 225MW
              CCPP), L&T Power (Bibiayana 400MW CCPP),Chatak Cement Company
              Ltd(8MW water tube boiler), Eastern refinery, SUFEL , Engineering
              Resource International (ERI), North-West Power Generation Company
              Ltd(225MW CCPP), Akij Group, Bhola 220MW(BIsho Infra Project
              Limited), 620x2 MW Matree Super Thermal Power Plant, Rampal, &
              others national and multinational companies. We are enlisted
              vendors of GE and Nutunbidyut Bangladesh Ltd. We have Excellent
              Scaffolding & Mechanical Expert teams for Mechanical works, Piping
              & Scaffolding works. We always follow world class Quality & Safety
              policy for our all of operations.
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      {/* Company Stats */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div>
          <div>
            <h2 className="text-center text-3xl md:text-5xl font-bold text-neutralDGrey mb-4 md:w-full">
              We are service provider of
            </h2>
            <p>
              <ol>
                <li>
                  <span className="font-bold text-brandPrimary text-xl">
                    Piping Works
                  </span>{" "}
                  All kinds of pipe Fabrication, Erection & Welding.
                </li>
                <li>
                  <span className="font-bold text-brandPrimary text-xl">
                    Mechanical works
                  </span>{" "}
                  All kinds of steel fabrication, Erection, Ducting, chimney,
                  ETP-FGR tank, modification/ installation, Boiler maintenance,
                  IDCT, Silo, Insulation & Painting Etc.
                </li>
                <li>
                  <span className="font-bold text-brandPrimary text-xl">
                    Scaffolding works
                  </span>{" "}
                  Onshore & Offshore projects.
                </li>
                <li>
                  <span className="font-bold text-brandPrimary text-xl">
                    General order supply
                  </span>{" "}
                  Technical Skilled manpower, Scaffolding Materials
                  ,Construction materials & Stationary supply Etc.
                </li>
                <li>
                  <span className="font-bold text-brandPrimary text-xl">
                    Plant shutdown Projects
                  </span>{" "}
                  Gas Plant, Chemical Plant, Power Plant, Refinery project &
                  Others Plants.
                </li>
              </ol>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
