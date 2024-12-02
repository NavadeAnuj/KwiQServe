import React from "react";

const Service = () => {
  return (
    <div>
      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Our Services
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {[
            {
              title: "SEO Optimization",
              description:
                "Enhance your website’s visibility on search engines.",
              bgColor: "#1a202c",
              hoverColor: "#2d3748",
            },
            {
              title: "Content Marketing",
              description: "Engage your audience with quality content.",
              bgColor: "#ff7f50",
              hoverColor: "#ff8f60",
            },
            {
              title: "Social Media Marketing",
              description: "Build your brand presence on social platforms.",
              bgColor: "#2d3748",
              hoverColor: "#4a5568",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="text-white p-6 rounded-lg shadow-lg transition duration-300"
              style={{
                backgroundColor: service.bgColor,
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = service.hoverColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = service.bgColor)
              }
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Service;
