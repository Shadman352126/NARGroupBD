import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Membership Organizations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      id: 2,
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      id: 3,
      title: "Clubs And groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
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
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
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
      <div>
        {services.map((service) => (
          <div key={service.id}>
            <div>
              <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                {service.title}
              </h4>
              <p className="">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
