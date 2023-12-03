import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Membership Organizations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      images: "/src/assets/Icon.svg",
    },
    {
      id: 2,
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      images: "/src/assets/Icon (1).svg",
    },
    {
      id: 3,
      title: "Clubs And groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      images: "/src/assets/Icon (2).svg",
    },
  ];
  return (
    <div className="md-px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <h1 className="text-4xl text-neutralDGrey font-semibold mb2">
          Our Clients
        </h1>
        <p className="text-neutralDGrey">
          We have been working with some valuable client
        </p>
        {/* client company logo */}
        <div className="my-12 flex flex-wrap justify-between items-center gap-5">
          <img src="/src/assets/clientAPSCL.png" alt="" />
          <img src="/src/assets/clientnutan-bidyut-logo.webp" alt="" />
          <img src="/src/assets/client3.png" alt="" />
          <img src="/src/assets/client5.png" alt="" />
        </div>
      </div>

      {/* service card */}
      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h1 className="text-4xl text-neutralDGrey font-semibold mb2">
          Manage your entire community in a single system
        </h1>
        <p className="text-neutralDGrey">Who is NAR Group suitable for?</p>
      </div>
      {/* card */}
      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer 
          hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
          >
            <div>
              <div className="bg-[#E8F5E9] h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                <img src={service.images} alt="" className="-ml-5 w-full" />
              </div>
              <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                {service.title}
              </h4>
              <p className="text-sm text-neutralGrey">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
